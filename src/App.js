import React from "react";
import "./App.css";
import Card from "./components/Card/Card.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
