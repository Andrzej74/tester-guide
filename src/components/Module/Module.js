import React from "react";
import { useParams } from "react-router-dom";
import Navigate from "../Navigate/Navigate";
import "./Module.css";

const Module = () => {
  const { moduleName } = useParams();
  const title = moduleName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

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