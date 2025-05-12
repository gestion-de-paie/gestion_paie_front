import React from "react";
import "./UnitLoader.css";

const UnitLoader = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 1300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="container">
        <div className="unit-loader">
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
        </div>
        <div className="loading-text">Chargement du système ITECH...</div>
      </div>
    </div>
  );
};

export default UnitLoader;
