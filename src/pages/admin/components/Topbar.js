import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <h1>HOME</h1>
      <div className="search">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <input type="text" placeholder="search" />
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
