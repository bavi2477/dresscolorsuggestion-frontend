import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './Style/Home.css';
import Dashboard from './Components/Dashboard';
import MyAccount from './Components/MyAccount';
import ColorShades from './Components/ColorShades';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import UserPassResetReq from './Components/UserPassResetReq';
import UserPassReset from './Components/UserPassReset';
import Home from './Components/Home';
import ComplementaryColor from './Components/ComplementaryColor';

const App = () => {
  // State for sliding dashboard
  const [isOpen, setIsOpen] = useState(false);
  // State for profile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for token
  const [token, setToken] = useState('');

  const [userId, setUserId] = useState('');
  console.log('app token', token);

  // Toggle sliding dashboard
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle profile dropdown
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
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
          <Route path="/dashboard" element={<Dashboard isOpen={isOpen} toggleNavbar={toggleNavbar} userId={userId} />}>
            <Route path="myaccount" element={<MyAccount token={token} setUserId={setUserId} />} />
            <Route path="shades" element={<ColorShades />} />
            <Route path="complementary" element={<ComplementaryColor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
