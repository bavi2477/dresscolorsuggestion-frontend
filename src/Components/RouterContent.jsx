import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyAccount from './MyAccount';
import ColorShades from './ColorShades';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import UserPassResetReq from './UserPassResetReq';
import UserPassReset from './UserPassReset';
import Home from './Home';
import '../Style/Home.css';
import ComplementaryColor from './ComplementaryColor';

const RouterContent = ({ isOpen, toggleNavbar, isDropdownOpen, toggleDropdown, token, setToken }) => {
  console.log('router start token', token);
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  const handleDropdownClose = () => {
    if (isDropdownOpen) {
      toggleDropdown();
    }
  };

  return (
    <>
      {isDashboardRoute && (
        <div className="navbar navbar-light bg-light fixed-top">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex align-items-center">
              <div className="me-3 dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" onClick={toggleDropdown}>
                  Profile
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link to="/dashboard/myaccount" className="dropdown-item" onClick={handleDropdownClose}>My Account</Link></li>
                    <li><button className="dropdown-item" onClick={handleDropdownClose}>Logout</button></li>
                  </ul>
                )}
              </div>
              <div className="ms-3">
                <button className="btn btn-outline-danger">Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin setToken={setToken} />} />
        <Route path="/forgot-password" element={<UserPassResetReq />} />
        <Route path="/reset-password/:token" element={<UserPassReset />} />
        <Route path="/dashboard" element={<Dashboard isOpen={isOpen} toggleNavbar={toggleNavbar} token={token} />}>
          <Route path="myaccount" element={<MyAccount token={token} />} />
          <Route path="shades" element={<ColorShades />} />
          <Route path="complementary" element={<ComplementaryColor />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterContent;
