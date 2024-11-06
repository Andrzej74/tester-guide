import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigate.css"; // Dodaj style osobno dla komponentu nawigacyjnego

const Navigate = ({ onDashboard, onModuleTitle, onPrevious, onNext, disablePrevious, disableNext }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={onDashboard} className="nav-button">
        Dashboard
      </button>
      <button onClick={onModuleTitle} className="nav-button">
        Strona modułu
      </button>
      <button onClick={onPrevious} className="nav-button" disabled={disablePrevious}>
        Wstecz
      </button>
      <button onClick={onNext} className="nav-button" disabled={disableNext}>
        Do przodu
      </button>
    </div>
  );
};

export default Navigate;