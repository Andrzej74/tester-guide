import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css';

export const moduleUrlMap = [
  { title: "Instalacja i konfiguracja Cypressa", url: "instalacja-konfiguracja-cypressa", level: "Poziom Podstawowy" },
  { title: "Struktura projektu Cypress", url: "struktura-projektu-cypress", level: "Poziom Podstawowy" },
  { title: "Tworzenie prostych testów E2E", url: "tworzenie-testow-e2e", level: "Poziom Podstawowy" },
  { title: "Podstawowe komendy", url: "podstawowe-komendy", level: "Poziom Początkujący" },
  { title: "Praca z elementami DOM", url: "praca-elementy-dom", level: "Poziom Początkujący" },
  { title: "Debugowanie testów", url: "debugowanie-testow", level: "Poziom Początkujący" },
  { title: "Uruchamianie testów", url: "uruchamianie-testow", level: "Poziom Początkujący" },
  { title: "Aliasowanie i skróty", url: "aliasowanie-skroty", level: "Poziom Średniozaawansowany" },
  { title: "Przechwytywanie żądań sieciowych", url: "przechwytywanie-zadan-sieciowych", level: "Poziom Średniozaawansowany" },
  { title: "Praca z danymi testowymi", url: "praca-dane-testowe", level: "Poziom Średniozaawansowany" },
  { title: "Zarządzanie stanem aplikacji", url: "zarzadzanie-stanem-aplikacji", level: "Poziom Średniozaawansowany" },
  { title: "Organizacja testów", url: "organizacja-testow", level: "Poziom Średniozaawansowany" },
  { title: "Komendy niestandardowe", url: "komendy-niestandardowe", level: "Poziom Zaawansowany" },
  { title: "Testowanie responsywności", url: "testowanie-responsywnosci", level: "Poziom Zaawansowany" },
  { title: "Autentykacja i sesje użytkowników", url: "autentykacja-sesje-uzytkownikow", level: "Poziom Zaawansowany" },
  { title: "Testowanie API", url: "testowanie-api", level: "Poziom Zaawansowany" },
  { title: "Praca z iframe", url: "praca-iframe", level: "Poziom Zaawansowany" },
  { title: "Stubbing i mockowanie", url: "stubbing-mockowanie", level: "Poziom Ekspert" },
  { title: "Integracja z bazą danych", url: "integracja-baza-danych", level: "Poziom Ekspert" },
  { title: "Zaawansowana konfiguracja", url: "zaawansowana-konfiguracja", level: "Poziom Ekspert" },
  { title: "Wykorzystanie pluginów", url: "wykorzystanie-pluginow", level: "Poziom Ekspert" },
  { title: "Integracja z CI/CD", url: "integracja-ci-cd", level: "Poziom Ekspert" },
  { title: "Optymalizacja wydajności testów", url: "optymalizacja-wydajnosci-testow", level: "Poziom Ekspert" },
  { title: "Zaawansowane debugowanie", url: "zaawansowane-debugowanie", level: "Poziom Ekspert" },
  { title: "Tworzenie własnych pluginów", url: "tworzenie-wlasnych-pluginow", level: "Poziom Ekspert" },
  { title: "Testowanie mikrofrontendów", url: "testowanie-mikrofrontendow", level: "Poziom Ekspert" },
  { title: "Integracja z narzędziami zewnętrznymi", url: "integracja-narzedzia-zewnetrzne", level: "Poziom Ekspert" },
  { title: "Skalowanie testów", url: "skalowanie-testow", level: "Poziom Ekspert" },
  { title: "Zaawansowane scenariusze testowe", url: "zaawansowane-scenariusze-testowe", level: "Poziom Ekspert" }
];

const Dashboard = () => {
  const [selectedModules, setSelectedModules] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (module) => {
    setSelectedModules((prevSelected) =>
      prevSelected.includes(module)
        ? prevSelected.filter((m) => m !== module)
        : [...prevSelected, module]
    );
  };

  const handleStartModule = () => {
    if (selectedModules.length > 0) {
      const moduleUrl = moduleUrlMap.find((m) => m.title === selectedModules[0])?.url;
      if (moduleUrl) navigate(`/modules/${moduleUrl}`);
    }
  };

  // Grupa modułów po poziomach
  const levels = moduleUrlMap.reduce((acc, module) => {
    if (!acc[module.level]) acc[module.level] = [];
    acc[module.level].push(module);
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      {Object.entries(levels).map(([level, modules]) => (
        <div key={level} className="dashboard-level">
          <h2 className="level-title">{level}</h2>
          <ul className="module-list">
            {modules.map((module, idx) => (
              <li key={idx} className="module-item">
                <input
                  type="checkbox"
                  checked={selectedModules.includes(module.title)}
                  onChange={() => handleCheckboxChange(module.title)}
                  className="module-checkbox"
                />
                <Link
                  to={`/modules/${module.url}`}
                  className="module-link"
                >
                  {module.title}
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
