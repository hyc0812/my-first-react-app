import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './App.css';
// import images from "./images";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessson with Katie faferes"
        price={130}
      />
    </div>
  );
}

export default App;
