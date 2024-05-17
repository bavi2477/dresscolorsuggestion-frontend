import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Home.css';

const ComplementaryColor = ({ isOpen, toggleNavbar }) => {
    const [colorName, setColorName] = useState('');
    const [complementaryColor, setComplementaryColor] = useState('');
    const [colorHexLink, setColorHexLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://dresscolorsuggestion-backend-sefa.onrender.com/api/user/complementary/${colorName}`);
            setComplementaryColor(response.data.complementaryColor);
            setColorHexLink(response.data.colorHexLink);
        } catch (error) {
            setError('Error for getting complementary for this color try another color.');
            console.error('Error fetching complementary color:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`container-fluid cc mt-4 ${isOpen ? 'open' : ''}`}>
            <h2>Get Complementary Color</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Enter Color Name:</label>
                <input
                    type="text"
                    id="colorName"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                />
                <button type="submit" disabled={loading}>Get Complementary Color</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {complementaryColor && (
                <div className="complementary-color-result">
                    <div
                        className="color-box"
                        style={{ backgroundColor: complementaryColor }}
                    >
                        <span>{complementaryColor}</span>
                    </div>
                    <a href={colorHexLink} target="_blank" rel="noopener noreferrer">
                        View on Color-Hex.com
                    </a>
                </div>
            )}
        </div>
    );
};

export default ComplementaryColor;
