import "../../components/LoginSignup/Login.css";
import React, { useEffect, useState } from "react";
import { auth, googlePRovider } from "../../firebase";
import "../LoginSignup/Login.css";
import "./Login.css";
import sLogo from "../Assets/sLogo.png";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

interface LoginProps {
  onFormSwitch: (formName: string) => void;
  history: any;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googlePRovider).then((userCredential) => {
        const user = userCredential.user;
        const name = userCredential.user.displayName;
        const profilePic = userCredential.user.photoURL;

        if (name !== null) {
          localStorage.setItem("name", name);
        }
        if (profilePic !== null) {
          localStorage.setItem("profilePic", profilePic);
        }
        setUser(user);
        navigate("/");
      });
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  };

  const handleSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log("Authentication successful:", user);

        //Clear form
        setEmail("");
        setPass("");
        navigate("/");
      })
      .catch((error) => {
        // Handle any authentication errors
        console.error("Authentication error:", error);
      });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  };

  return (
    <div className="formCantaner">
      <img className="sync" src={sLogo} alt="logo" />
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginLabel" htmlFor="email">
          Email
        </label>
        <input
          className="formInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@example.com"
          id="email"
          name="email"
        />
        <label className="loginLabel" htmlFor="password">
          Password
        </label>
        <input
          className="formInput"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </form>

      <>
        <Link to={"/"}>
          <button className="formButton" onClick={handleSubmit}>
            Login
          </button>
        </Link>
        <Link to={""}>
          <button className="formButton" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </Link>

        {/* <button onClick={logout}>Log Out</button> */}

        <button
          className="toggleButton"
          onClick={() => props.onFormSwitch("signup")}
        >
          Do you have an account? Rigister here.
        </button>
      </>
      {/* )} */}
    </div>
  );
};

{
  /* function setCurrentUser() { */
}
{
  /* throw new Error("Function not implemented."); */
}
