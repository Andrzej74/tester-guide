// /src/components/Dashboard/Dashboard.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const navigate = useNavigate();

  const levels = [
    {
      title: "Poziom Podstawowy",
      modules: [
        "Instalacja i konfiguracja Cypressa",
        "Struktura projektu Cypress",
        "Tworzenie prostych testów E2E",
      ],
    },
    {
      title: "Poziom Początkujący",
      modules: [
        "Podstawowe komendy",
        "Praca z elementami DOM",
        "Debugowanie testów",
        "Uruchamianie testów",
      ],
    },
    {
      title: "Poziom Średniozaawansowany",
      modules: [
        "Aliasowanie i skróty",
        "Przechwytywanie żądań sieciowych",
        "Praca z danymi testowymi",
        "Zarządzanie stanem aplikacji",
        "Organizacja testów",
      ],
    },
    {
      title: "Poziom Zaawansowany",
      modules: [
        "Komendy niestandardowe",
        "Testowanie responsywności",
        "Autentykacja i sesje użytkowników",
        "Testowanie API",
        "Praca z iframe",
      ],
    },
    {
      title: "Poziom Ekspert",
      modules: [
        "Stubbing i mockowanie",
        "Integracja z bazą danych",
        "Zaawansowana konfiguracja",
        "Wykorzystanie pluginów",
        "Integracja z CI/CD",
        "Optymalizacja wydajności testów",
        "Zaawansowane debugowanie",
        "Tworzenie własnych pluginów",
        "Testowanie mikrofrontendów",
        "Integracja z narzędziami zewnętrznymi",
        "Skalowanie testów",
        "Zaawansowane scenariusze testowe",
      ],
    },
  ];

  const handleCheckboxChange = (module) => {
    setSelectedModules((prevSelected) =>
      prevSelected.includes(module)
        ? prevSelected.filter((m) => m !== module)
        : [...prevSelected, module]
    );
  };

  const handleStartModule = () => {
    if (selectedModules.length > 0) {
      navigate(`/modules/${selectedModules[0].replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      {levels.map((level, index) => (
        <div key={index} className="dashboard-level">
          <h2 className="level-title">{level.title}</h2>
          <ul className="module-list">
            {level.modules.map((module, idx) => (
              <li key={idx} className="module-item">
                <input
                  type="checkbox"
                  checked={selectedModules.includes(module)}
                  onChange={() => handleCheckboxChange(module)}
                  className="module-checkbox"
                />
                <Link
                  to={`/modules/${module.replace(/\s+/g, "-").toLowerCase()}`}
                  className="module-link"
                >
                  {module}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleStartModule}
        disabled={selectedModules.length === 0}
        className="start-button"
      >
        Start
      </button>
    </div>
  );
};

export default Dashboard;
