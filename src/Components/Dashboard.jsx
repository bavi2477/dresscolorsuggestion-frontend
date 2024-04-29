import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ... (imports and other code)

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
    const [selectedOccasion, setSelectedOccasion] = useState('')

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show');

        // Toggle overflow hidden on body
        if (!isOpen) {
            document.body.style.overflowX = 'hidden';
        } else {
            document.body.style.overflowX = 'auto';
        }
    };

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation to prevent closing the navbar
        console.log("Before dropdown state:", isDropdownOpen); // Log the current state
        setIsDropdownOpen(!isDropdownOpen);
        console.log("After dropdown state:", !isDropdownOpen); // Log the new state
    };

    const handleGetSuggestions = async () => {
        if (!selectedOccasion) {
            alert('Please select an occasion.');
            return;
        }
        try {
            const userId = '66112316c69f66204557c5cf'; // Replace this with actual user ID
            const url = `http://localhost:4000/api/user/dress-suggestion/${userId}`;
            const requestData = { occasion: selectedOccasion };
    
            const res = await axios.post(url, requestData);
            console.log(res.data); // Handle response accordingly
            
            // Display the dress color suggestion using a toast message
            toast.success(`Dress color suggestion: ${res.data.color}`)
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error fetching dress suggestion. Please try again later.');
        }
    };
    
    

    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <div className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Profile and Logout outside of navbar-collapse */}
                    <div className="d-flex align-items-center">
                        <div className="me-3 dropdown">
                            <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                onClick={toggleDropdown}
                            >
                                Profile
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link to="/dashboard/myaccount" className="dropdown-item">My Account</Link></li>
                                    <li><button className="dropdown-item">Logout</button></li>
                                </ul>
                            )}
                        </div>
                        <div className="ms-3">
                            <button className="btn btn-outline-danger">Logout</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="main-content">
                <div className={`container-fluid mt-4 ${isOpen ? 'open' : ''}`}>
                    <h1>Welcome to get your preference color for today</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="occasionSelect">Choose an occasion:</label>
                            <select
                                className="form-control"
                                id="occasionSelect"
                                value={selectedOccasion}
                                onChange={e => setSelectedOccasion(e.target.value)}
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
            </div>

            {/* Navbar collapse */}
            <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/getuser">Userdetail</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/dashboard/shades">Color Shades</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/dashboard/complementary">Color Shades</Link>
                    </li>
                </ul>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
