import React from "react";
import { Link } from "react-router-dom";
import "./substituteNav.css";

interface NavBarProps {
  user: any;
}

export default function SubstituteNav() {
  return (
    <nav className="substituteNav">
      <ul className="drink-sync-links">
        <Link to="/">Drink Sync</Link>
        <li className="home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="about-link">
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
