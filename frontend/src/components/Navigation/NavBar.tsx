import React, { useContext } from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import "../Navigation/NavBar.css";
import syncLogo from "../Assets/syncLogo.png";
import Header from "../Header/Header";
// import { signInWithGoogle } from "../auth";
import { signInWithPopup } from "firebase/auth";
import { auth, googlePRovider } from "../../firebase";
import UserContext from "../Context/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <nav className="navBarContainer">
        <div className="logo">
          <img className="logoSpin" src={syncLogo} alt="Logo" />
          <Link className="logText" to="/">
            Drink Sync
          </Link>
        </div>

        <div className="navigation">
          <input type="checkbox" className="deviceMenu" />
          <div className="burgerMenu"></div>

          <ul className="navBarUl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="userOptions">
            <p>Welcome, {user.displayName}!</p>
            {user.photoURL && <img src={user.photoURL} />}
            <p>
              <Link to="/favorites">Saved Drinks</Link>
            </p>
          </div>
        ) : (
          <Link className="signin" to="/login" rel="noopener noreferrer">
            Sign In
          </Link>
        )}
      </nav>
      <Header />
    </>
  );
}
