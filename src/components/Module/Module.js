import React from "react";
import { useParams } from "react-router-dom";
import Navigate from "../Navigate/Navigate";
import { moduleUrlMap } from "../Dashboard/Dashboard";
import "./Module.css";

const Module = () => {
  const { moduleName } = useParams();

  // Znajdź moduł o pasującym URL
  const module = moduleUrlMap.find((mod) => mod.url === moduleName);
  const title = module ? module.title : "Moduł nieodnaleziony";

  return (
    <div className="module-page">
      <div className="module-container">
        <h1 className="module-title">{title}</h1>
      </div>
      <div className="navigate-container">
        <Navigate moduleName={moduleName} />
      </div>
    </div>
  );
};

export default Module;