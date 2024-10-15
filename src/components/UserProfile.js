import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebaseConfig";
import { signOut, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Wylogowanie użytkownika
      navigate("/"); // Przekierowanie na stronę główną po wylogowaniu
    } catch (error) {
      console.error("Błąd podczas wylogowania:", error);
    }
  };

  const handleDeleteAccount = async () => {
    if (user) {
      try {
        await deleteUser(user); // Usunięcie konta użytkownika
        navigate("/"); // Przekierowanie na stronę główną po usunięciu konta
      } catch (error) {
        console.error("Błąd podczas usuwania konta:", error);
      }
    }
  };

  return (
    <div>
      <h2>Profil użytkownika</h2>
      {user ? (
        <div>
          <p>Zalogowany jako: {user.email}</p>
          <button onClick={handleLogout} id="logout-button">Wyloguj się</button>
          <button onClick={handleDeleteAccount} id="delete-account-button">Usuń konto</button>
        </div>
      ) : (
        <p>Brak zalogowanego użytkownika</p>
      )}
    </div>
  );
};

export default UserProfile;
