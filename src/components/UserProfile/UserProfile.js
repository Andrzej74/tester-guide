// /src/components/UserProfile/UserProfile.js

import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseConfig";
import { signOut, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Błąd podczas wylogowania:", error);
    }
  };

  const handleDeleteAccount = async () => {
    if (user) {
      try {
        await deleteUser(user);
        navigate("/");
      } catch (error) {
        console.error("Błąd podczas usuwania konta:", error);
      }
    }
  };

  return (
    <div className="user-profile-container">
      <h2 className="profile-title">Profil użytkownika</h2>
      {user ? (
        <div className="profile-details">
          <p className="profile-email">Zalogowany jako: <span>{user.email}</span></p>
          <div className="profile-buttons">
            <button onClick={handleLogout} className="profile-button logout-button">Wyloguj się</button>
            <button onClick={handleDeleteAccount} className="profile-button delete-account-button">Usuń konto</button>
          </div>
        </div>
      ) : (
        <p className="no-user-message">Brak zalogowanego użytkownika</p>
      )}
    </div>
  );
};

export default UserProfile;
