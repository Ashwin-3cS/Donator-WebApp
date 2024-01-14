// import React from "react";
// import  ReactDOM  from "react-dom";

// import NavBar from "./components/NavBar.jsx";
// import Section from "./components/Section.jsx";



// function App(){

//   return  ( 
//     <div>
//       <NavBar/>
//       <Section/>
//     </div>

//   );
// }


// export default App;




import {Outlet} from "react-router-dom";
import "./App.css";


function App(){
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;