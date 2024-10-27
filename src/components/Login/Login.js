// /src/components/Login/Login.js

import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Błąd logowania");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Logowanie</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-input-group">
          <input
            type="email"
            id="login-email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="login-password"
            className="login-input"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" id="login-submit" className="login-button">
            Zaloguj się
          </button>
        </div>
        {error && <p id="login-error" className="login-error">{error}</p>}
      </form>
      <div className="login-register-container">
        <p className="login-register-text">Nie masz konta?</p>
        <a href="/register" id="login-register-link" className="login-register-link">Zarejestruj się</a>
      </div>
    </div>
  );
};

export default Login;
