import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import "../Navigation/NavBar.css";
import syncLogo from "../Assets/syncLogo.png";

interface NavBarProps {
  user: any;
}

export default function NavBar() {
  return (
    <nav>
      <ul>
        <img src={syncLogo} alt="Logo" />
        <Link to="/">Drink Sync</Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        {/* {user && (
          <li>
            <span>Welcome, {user.displayName}!</span>
          </li>
        )} */}
      </ul>
    </nav>
  );
}
