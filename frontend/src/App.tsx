import React from "react";
import MainSubstitute from "./components/mainSubstitute/mainSubstitute";
import "./App.css";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <h1>DrinkSync</h1>
      <MainSubstitute />
      <Footer></Footer>
    </div>
  );
}

export default App;
