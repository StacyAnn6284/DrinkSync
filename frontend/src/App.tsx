import React, { useState } from "react";
import { Signup } from "./Componenets/LoginSignup/Signup";
import { Login } from "./Componenets/LoginSignup/Login";
import "./App.css";

function App() {
  // holds the value of the form being displayed
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
