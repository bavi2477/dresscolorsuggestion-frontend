import React, { useState } from 'react';
import axios from 'axios';

const ColorShades = () => {
    const [colorName, setColorName] = useState('');
    const [shades, setShades] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:4000/api/user/shades/${colorName}`);
            setShades(response.data.shades);
        } catch (error) {
            console.error('Error fetching color shades:', error);
        }
    };

    return (
        <div>
            <h2>Get Color Shades</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Enter Color Name:</label>
                <input
                    type="text"
                    id="colorName"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                />
                <button type="submit">Get Shades</button>
            </form>
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
