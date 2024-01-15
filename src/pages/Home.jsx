import React from "react";
import  ReactDOM  from "react-dom";

import NavBar from "../components/NavBar.jsx"
import Section from "../components/Section.jsx";



function Home(){

  return  ( 
    <div>
      <NavBar/>
      <p>
        Empowering Restaurants, subways, Nourishing Communities: Connecting surplus food from restaurants to those in need, we strive to combat hunger and reduce food waste, creating a more sustainable and compassionate world
      </p>
      <Section/>
      
    </div>

  );
}


export default Home;
