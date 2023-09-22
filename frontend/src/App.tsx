import React, { useState } from "react";
import { Signup } from "./components/LoginSignup/Signup";
import { Login } from "./components/LoginSignup/Login";
import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import MainSubstitute from "./components/mainSubstitute/mainSubstitute";

import Footer from "./components/footer/footer";
import { Menu } from "./components/Menu/Menu";

function App() {
  // holds the value of the form being displayed
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/login"
            element={
              currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <Signup onFormSwitch={toggleForm} />
              )
            }
          ></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/substitutes" element={<MainSubstitute />}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
