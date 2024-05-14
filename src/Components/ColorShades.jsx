import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Home.css'

const ColorShades = ({ isOpen, toggleNavbar }) => {
    const [colorName, setColorName] = useState('');
    const [shades, setShades] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:4000/api/user/shades/${colorName}`);
            setShades(response.data.shades);
        } catch (error) {
            setError('Error fetching color shades. Please try again.');
            console.error('Error fetching color shades:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`container-fluid cd mt-4 ${isOpen ? 'open' : ''}`}>
            <h2>Get Color Shades</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Enter Color Name:</label>
                <input
                    type="text"
                    id="colorName"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                />
                <button type="submit" disabled={loading}>Get Shades</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <div className="color-shades">
                {shades.map((shade, index) => (
                    <div key={index} className="color-shade" style={{ backgroundColor: shade }}>
                        <span>{shade}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorShades;
