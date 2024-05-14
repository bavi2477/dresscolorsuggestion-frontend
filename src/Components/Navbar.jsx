import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, toggleNavbar, isDropdownOpen, toggleDropdown }) => {
  return (
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
                <li><Link to="/dashboard/myaccount" className="dropdown-item">My Account</Link></li>
                <li><button className="dropdown-item" >Logout</button></li>
              </ul>
            )}
          </div>
          <div className="ms-3">
            <button className="btn btn-outline-danger" >Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
