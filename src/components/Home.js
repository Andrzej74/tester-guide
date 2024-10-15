import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Tester Guide</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login" id="home-login-link">Login</Link>
          </li>
          <li>
            <Link to="/register" id="home-register-link">Register</Link>
          </li>
          <li>
            <Link to="/profile" id="home-profile-link">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
