// src/components/UserProfile.js
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profil użytkownika</h2>
      {user ? (
        <p>Zalogowany jako: {user.email}</p>
      ) : (
        <p>Brak zalogowanego użytkownika</p>
      )}
    </div>
  );
};

export default UserProfile;
