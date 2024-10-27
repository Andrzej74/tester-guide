import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 128;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length < minLength) {
      return "Hasło musi mieć co najmniej 8 znaków.";
    }
    if (password.length > maxLength) {
      return "Hasło nie może mieć więcej niż 128 znaków.";
    }
    if (!hasUpperCase) {
      return "Hasło musi zawierać co najmniej jedną wielką literę.";
    }
    if (!hasLowerCase) {
      return "Hasło musi zawierać co najmniej jedną małą literę.";
    }
    if (!hasNumber) {
      return "Hasło musi zawierać co najmniej jedną cyfrę.";
    }
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Niepoprawny format adresu e-mail.");
      return;
    }
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Konto z podanym emailem istnieje.");
      } else {
        setError("Błąd rejestracji");
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Rejestracja</h2>
      <form onSubmit={handleRegister} noValidate className="register-form">
        <div className="register-input-group">
          <input
            type="email"
            id="register-email"
            className="register-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="register-password"
            className="register-input"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" id="register-submit" className="register-button">
            Zarejestruj się
          </button>
        </div>
        {error && <p id="register-error" className="register-error">{error}</p>}
      </form>
      <div className="register-login-container">
        <p className="register-login-text">Masz już konto?</p>
        <a href="/login" className="register-login-link">Zaloguj się</a>
      </div>
    </div>
  );
};

export default Register;
