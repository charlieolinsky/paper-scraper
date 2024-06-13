import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PaperScraper Logo</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Search</li>
          <li className="nav-item">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
