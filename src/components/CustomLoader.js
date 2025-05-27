import React from "react";
import "../App.css"; // ou "./CustomLoader.css" selon où tu places le style

const CustomLoader = () => (
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
    <div className="loader"></div>
  </div>
);

export default CustomLoader;
