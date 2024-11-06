import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components//Home/Home";
import Login from "./components//Login/Login";
import Register from "./components/Register/Register";
import UserProfile from "./components/UserProfile/UserProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import Module from "./components/Module/Module";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modules/:moduleName" element={<Module />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
