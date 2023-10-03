import React, { useState } from "react";
import { Signup } from "./components/LoginSignup/Signup";
import { Login } from "./components/LoginSignup/Login";
import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainSubstitute from "./components/AllSubstitutes/mainSubstitute/mainSubstitute";
import Footer from "./components/footer/footer";
import SubstituteSubmission from "./components/AllSubstitutes/SubstituteSubmission/substituteSubmission";
import { Menu } from "./components/Menu/Menu";
import NavBar from "./components/Navigation/NavBar";
import About from "./components/Pages/About";
import AllSubstitutes from "./components/AllSubstitutes/allSubstitutes";

function App() {
  // const location = useLocation();
  // const isLoginPage = location.pathname === "/login";

  const [currentForm, setCurrentForm] = useState("login");
  const [user, setUser] = useState(null);

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} history={undefined} />
              ) : (
                <Signup onFormSwitch={toggleForm} />
              )
            }
          ></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/substitutes" element={<AllSubstitutes />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
