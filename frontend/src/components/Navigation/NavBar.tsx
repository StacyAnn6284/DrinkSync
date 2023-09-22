import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import "../Navigation/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">Logo</Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Favorite</Link>
        </li>
        <li>
          {" "}
          <Link to="/"></Link>
        </li>
      </ul>
    </nav>
  );
}
