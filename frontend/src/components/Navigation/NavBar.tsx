import React, { useContext } from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import "../Navigation/NavBar.css";
import syncLogo from "../Assets/syncLogo.png";
import Header from "../Header/Header";
// import { signInWithGoogle } from "../auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googlePRovider } from "../../firebase";
import UserContext from "../Context/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  console.log(user);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  };

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

            <div className="profile">
              <p className="color">Welcome, {user.displayName}!</p>
              {user.photoURL && (
                <img className="styleProfile" src={user.photoURL} />
              )}
            </div>
            <div>
              <button className="buttonStyle" onClick={logout}>
                Log Out
              </button>
                 <p>
              <Link to="/favorites">Saved Drinks</Link>
            </p>
            </div>

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
function setUser(arg0: null) {
  throw new Error("Function not implemented.");
}
