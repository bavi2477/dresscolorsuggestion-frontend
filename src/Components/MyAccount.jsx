import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';

const MyAccount = ({token, setUserId }) => {
  
  console.log('token at the start', token)
  
  const [formData, setFormData] = useState({
    favoriteColors: [],
    dislikedColors: [],
    contrastColor: '',
    skinTone: '',
    location: ''
  });
  
  const [userId, setLocalUserId] = useState('');

  useEffect(() => {
    if (token) {
      console.log('current token', token);
      getCurrentUser();
    }
  }, [token]);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/user/getuser', {
        headers: {
          Authorization: `${token}`
        }
      });
      const fetchedUserId = res.data.data[0]._id;
      setUserId(fetchedUserId);
      setLocalUserId(fetchedUserId);

    } catch (error) {
      console.error('Error fetching current user:', error);
      toast.error('Error fetching current user');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/user/user-preference/${userId}`, formData, {
        headers: {
          Authorization: `${token}`
        }
      });
      toast.success(res.data.message);
      setFormData({
        favoriteColors: [],
        dislikedColors: [],
        contrastColor: '',
        skinTone: '',
        location: ''
      });
    } catch (error) {
      console.error('Error updating preferences:', error);
      toast.error('Error updating preferences');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid mt-4">
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
