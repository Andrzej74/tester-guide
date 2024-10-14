import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Funkcja walidująca hasło
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
    return null; // Walidacja przeszła
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // Przekierowanie do profilu po poprawnej rejestracji
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Konto z podanym emailem istnieje."); // Obsługa istniejącego konta
      } else {
        setError("Błąd rejestracji"); // Inne błędy
      }
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          id="register-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="register-password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zarejestruj się</button>
        {error && <p>{error}</p>}
      </form>
      <p>Masz już konto? <a href="/login">Zaloguj się</a></p> {/* Link do logowania */}
    </div>
  );
};

export default Register;
