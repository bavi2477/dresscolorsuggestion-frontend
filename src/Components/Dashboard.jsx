import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Navbar from './Navbar';

const Dashboard = ({ isOpen, toggleNavbar, userId, handleLogout }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGetSuggestions = async () => {
    try {
      const url = `http://localhost:4000/api/user/dress-suggestion/${userId}`;
      const requestData = { occasion: selectedOccasion };

      const res = await axios.post(url, requestData);
      const suggestedColor = res.data.color;
      setModalMessage(`Dress color suggestion: ${suggestedColor}`);
      setModalIsOpen(true); // Open the modal
    } catch (error) {
      console.error('Error:', error);
      setModalMessage('Error fetching dress suggestion. Please try again later.');
      setModalIsOpen(true); // Open the modal
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage('');
  };

  const renderMainContent = () => {
    if (location.pathname === '/dashboard') {
      return (
        <div className={`container-fluid main mt-4 ${isOpen ? 'open' : ''}`}>
          <h1>Your Suggestions Here!!!</h1>
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
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleGetSuggestions}
            >
              {selectedOccasion ? "Get Suggestion using Occasion" : "Get Suggestion using Weather"}
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
        handleLogout={handleLogout}
      />
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
      {renderMainContent()}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Dress Suggestion"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Dress Suggestion</h2>
        <div>{modalMessage}</div>
        <button onClick={closeModal} className="btn btn-primary mt-2">Close</button>
      </Modal>
      <Outlet />
    </div>
  );
};

export default Dashboard;
