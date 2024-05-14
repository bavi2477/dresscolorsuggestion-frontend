import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Dashboard = ({ isOpen, toggleNavbar, userId }) => {
  console.log('userid in dash', userId);
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGetSuggestions = async () => {
    if (!selectedOccasion) {
      alert('Please select an occasion.');
      return;
    }
    try {
      const userId1 = userId;
      const url = `http://localhost:4000/api/user/dress-suggestion/${userId1}`;
      const requestData = { occasion: selectedOccasion };

      const res = await axios.post(url, requestData);
      console.log(res.data);
      toast.success(`Dress color suggestion: ${res.data.color}`);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error fetching dress suggestion. Please try again later.');
    }
  };

  const renderMainContent = () => {
    if (location.pathname === '/dashboard') {
      return (
        <div className={`container-fluid mt-4 ${isOpen ? 'open' : ''}`}>
          <h1>Welcome to get your preference color for today</h1>
          <form>
            <div className="form-group">
              <label htmlFor="occasionSelect">Choose an occasion:</label>
              <select
                className="form-control"
                id="occasionSelect"
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
              >
                <option value="">Select Occasion</option>
                <option value="wedding">Wedding</option>
                <option value="interview">Interview</option>
                <option value="party">Party</option>
                <option value="funeral">Funeral</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary mt-2" onClick={handleGetSuggestions}>
              Get Suggestion
            </button>
          </form>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-container">
      <Navbar
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      {renderMainContent()}
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard/shades">Shades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/dashboard/complementary">Complementary</Link>
          </li>
        </ul>
      </div>
     
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
