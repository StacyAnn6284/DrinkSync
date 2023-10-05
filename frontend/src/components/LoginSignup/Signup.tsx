import "../LoginSignup/Signup.css";
import "./Signup.css";
import React, { useState } from "react";
import syncLogo from "../Assets/syncLogo.png";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, googlePRovider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

interface SignupProps {
  onFormSwitch: (formName: string) => void;
  // history: any;
}

export const Signup: React.FC<SignupProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, passPass] = useState("");
  const [name, passName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, pass);
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(email);
    navigate("/");
    // Clear the form
    setEmail("");
    passPass("");
    passName("");
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googlePRovider);
      const user = userCredential.user;
      setUser(user);
      const randomString = Math.random().toString(36).substring(7);
      const googleEmail = `user+${randomString}@example.com`;
      const googlePassword = "password";

      await createUserWithEmailAndPassword(auth, googleEmail, googlePassword);

      navigate("/");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //   } catch (err) {
  //     console.error("Error signing in with Google:", err);
  //   }
  // };

  return (
    <div className="formCantaner">
      <img className="sync" src={syncLogo} alt="logo" />
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginLabel" htmlFor="name">
          Name
        </label>
        <input
          className="formInput"
          value={name}
          onChange={(e) => passName(e.target.value)}
          type="text"
          placeholder="John Doe"
          id="name"
          name="name"
        />
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
          onChange={(e) => passPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </form>

      <button className="formButton" onClick={handleSubmit}>
        Sign Up
      </button>

      <Link to={""}>
        <button className="formButton" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </Link>

      <button
        className="toggleButton"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

function setPass(arg0: string) {
  throw new Error("Function not implemented.");
}

function setName(arg0: string) {
  throw new Error("Function not implemented.");
}
function setUser(user: User) {
  throw new Error("Function not implemented.");
}
