import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Jeśli użytkownik nie jest zalogowany, przekieruj na stronę logowania
    return <Navigate to="/login" />;
  }

  // Jeśli użytkownik jest zalogowany, wyświetl elementy dzieci
  return children;
};

export default ProtectedRoute;
