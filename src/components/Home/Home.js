import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Tester Guide</h1>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li className="home-nav-item">
            <Link to="/login" id="home-login-link" className="home-link">Login</Link>
          </li>
          <li className="home-nav-item">
            <Link to="/register" id="home-register-link" className="home-link">Register</Link>
          </li>
          <li className="home-nav-item">
            <Link to="/profile" id="home-profile-link" className="home-link">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
