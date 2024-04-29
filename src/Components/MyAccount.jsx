import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = ({ token }) => {
    const [formData, setFormData] = useState({
        favoriteColors: [],
        dislikedColors: [],
        contrastColor: '',
        skinTone: '',
        location: ''
    });

    const [userId, setUserId] = useState('');

    useEffect(() => {
        // Fetch current user information when component mounts
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            // Send GET request to retrieve current user information
            const res = await axios.get('http://localhost:4000/api/user/getuser', {
                headers: {
                    Authorization: `${token}`
                }
            })
            setUserId(res.data.data[0]._id);

        } catch (error) {
            // Handle error
            console.error('Error fetching current user:', error);
            toast.error('Error fetching current user');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to update user preferences
            const res = await axios.post(`http://localhost:4000/api/user/user-preference/${userId}`, formData);
            // Handle success
            toast.success(res.data.message);
            setFormData('')
        } catch (error) {
            // Handle error
            console.error('Error updating preferences:', error);
            toast.error('Error updating preferences');
        }
    };

    const handleChange = (e) => {
        // Update form data when input values change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Welcome to your personalized choices!</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="favoriteColor" className="form-label">Favorite Color:</label>
                                    <input type="text" className="form-control" id="favoriteColor" name="favoriteColor" onChange={handleChange} value={formData.favoriteColor} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dislikedColor" className="form-label">Disliked Color:</label>
                                    <input type="text" className="form-control" id="dislikedColor" name="dislikedColor" onChange={handleChange} value={formData.dislikedColor} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contrastColor" className="form-label">Contrast Color:</label>
                                    <input type="text" className="form-control" id="contrastColor" name="contrastColor" onChange={handleChange} value={formData.contrastColor} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="skinTone" className="form-label">Skin Tone:</label>
                                    <select
                                        className="form-select"
                                        id="skinTone"
                                        name="skinTone"
                                        onChange={handleChange}
                                        value={formData.skinTone}
                                    >
                                        <option value="">Select Skin Tone</option>
                                        <option value="light">Light</option>
                                        <option value="medium">Medium</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location:</label>
                                    <input type="text" className="form-control" id="location" name="location" onChange={handleChange} value={formData.location} />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyAccount;
