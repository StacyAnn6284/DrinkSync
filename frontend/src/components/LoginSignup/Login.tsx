













import "./Login.css";
import { useState } from "react";
import syncLogo from "../Assets/syncLogo.png";
import { Auth } from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

interface LoginProps {
  onFormSwitch: (formName: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async () => {
    // e.preventDefault();
    // console.log("Email", email);
    // console.log("Password", pass);
    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // The authentication was successful
        const user = userCredential.user;
        console.log("Authentication successful:", user);

        //Clear form
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        // Handle any authentication errors
        console.error("Authentication error:", error);
      });
  };

  return (
    <div className="formCantaner">
      <img className="sync" src={syncLogo} alt="logo" />

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

      <button className="formButton" onClick={handleSubmit}>
        Login
      </button>

      <button
        className="toggleButton"
        onClick={() => props.onFormSwitch("signup")}
      >
        Do you have an account? Rigister here.
      </button>
    </div>
  );
};
