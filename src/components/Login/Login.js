import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // Przekierowanie na profil po poprawnym logowaniu
    } catch (err) {
      setError("Błąd logowania"); // Wyświetlenie błędu w przypadku nieudanego logowania
    }
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          id="login-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="login-password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="login-submit">Zaloguj się</button>
        {error && <p id="login-error">{error}</p>}
      </form>
      <p>Nie masz konta? <a href="/register" id="login-register-link">Zarejestruj się</a></p> {/* Link do rejestracji */}
    </div>
  );
};

export default Login;
