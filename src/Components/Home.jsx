import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';
import logoImage from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
    return (
        <div className="container-fluid with-bg">
            <header className="d-flex justify-content-between align-items-center py-3">
                <div className="logo">
                    <img src={logoImage} alt="Your Logo" className="logo-img rounded-circle" />
                    Style way
                </div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    </ul>
                </nav>
            </header>
            <section className="hero text-center py-5">
                <h1>Welcome to Your App</h1>
                <p className="lead">A place to discover the perfect colors for every occasion.</p>
                <Link to="/register" className="btn btn-primary">Enroll Now</Link>
            </section>
            <section className="features py-5">
                <h2 className="text-center mb-4">Key Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Dress Color Suggestions</h3>
                                <p className="card-text">Get personalized dress color suggestions based on the occasion and your preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Color Shades</h3>
                                <p className="card-text">Explore a variety of shades for any color to find the perfect match.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Complementary Colors</h3>
                                <p className="card-text">Discover complementary colors to create stunning color combinations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer mt-auto  bg-light">
                <div className="container">
                    <span className="text-muted">&copy; Bavithra 2024</span>
                    <ul className="list-inline ">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Home;
