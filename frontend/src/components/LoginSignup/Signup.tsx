import "../LoginSignup/Signup.css";
import React, { useState } from "react";
import syncLogo from "../Assets/syncLogo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

interface SignupProps {
  onFormSwitch: (formName: string) => void;
}

export const Signup: React.FC<SignupProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, passPass] = useState("");
  const [name, passName] = useState("");

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

    // Clear the form
    setEmail("");
    passPass("");
    passName("");
  };

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
// function setPass(arg0: string) {
//   throw new Error("Function not implemented.");
// }
