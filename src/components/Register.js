// src/components/Register.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Konto zostało utworzone!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zarejestruj się</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
