import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import MyAccount from './Components/MyAccount';
import ColorShades from './Components/ColorShades';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import UserPassResetReq from './Components/UserPassResetReq';
import UserPassReset from './Components/UserPassReset';
import Home from './Components/Home';
import ComplementaryColor from './Components/ComplementaryColor';
import './Style/Home.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get('http://localhost:4000/api/user/getuser', {
            headers: { Authorization: token }
          });
          const fetchedUserId = response.data.data[0]._id;
          setUserId(fetchedUserId);
          localStorage.setItem('userId', fetchedUserId);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken('');
    setUserId('');
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#f0f0f0' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin setToken={setToken} />} />
          <Route path="/forgot-password" element={<UserPassResetReq />} />
          <Route path="/reset-password/:token" element={<UserPassReset />} />
          <Route path="/dashboard" element={<Dashboard isOpen={isOpen} toggleNavbar={toggleNavbar} userId={userId} toggleDropdown={toggleDropdown} handleLogout={handleLogout} />}>
            <Route path="myaccount" element={<MyAccount token={token} userId={userId} />} />
            <Route path="shades" element={<ColorShades />} />
            <Route path="complementary" element={<ComplementaryColor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
