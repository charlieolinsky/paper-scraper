import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default App;
