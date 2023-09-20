
import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


import MainSubstitute from "./components/mainSubstitute/mainSubstitute";

import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path = "/substitutes" element={<MainSubstitute />}></Route>
        </Routes>
     
         <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
