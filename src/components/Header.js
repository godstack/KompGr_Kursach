import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo header_logo" />

      <div className="header_item">
        <Link to="/">
          <div className="logo header__main-logo" />
        </Link>
      </div>

      <div className="header_item">
        <Link to="/history">
          {" "}
          <div className="logo header__history-logo" />{" "}
        </Link>
      </div>

      <div className="header_item">
        <Link to="/construction">
          {" "}
          <div className="logo header__construction-logo" />
        </Link>
      </div>

      <div className="header_item">
        <Link to="/characteristics">
          {" "}
          <div className="logo header__charateristics-logo" />{" "}
        </Link>
      </div>

      <div className="header_item">
        <Link to="/models">
          <div className="logo header__models-logo" />
        </Link>
      </div>
    </div>
  );
};
