// import React from 'react';
// import ReactDOM from 'react-dom';
// import  "./index.css";
// // import { createRoot } from 'react-dom/client';


// import App from "./App.js";

// import{
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Protected from './components/Protected.jsx';
// import Signup from './pages/Signup.jsx';
// import Login from './pages/Login.jsx';
// import Home from './pages/Home.jsx'; // Replace with the correct path to Home component


// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element ={<App/>}>
//       <Route path="signup" element ={<Signup/>}/>
//       <Route path="login" element ={<Login/>}/>
//       <Route path="/" element ={<Protected/>}>
//         <Route path="/" index element={<Home/>}/>
//       </Route>
//     </Route>
//   )
// );
// // Replace this line
// // const root = ReactDOM.createRoot(document.getElementById('root'));

// // With this line
// ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));




































// let sections=document.querySelectorAll('section ');
// let navLinks=document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
      

//       // Adding  'active' class to the corresponding navigation link
//       document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//     });
//   };
// });
// };





// ReactDOM.render(
//   <div>
//     <App/>
//   </div>,
// document.getElementById("root")
// );
import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";

import App from "./App.jsx";
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Protected from './components/Protected.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup';
import Consumer from './pages/Consumer.jsx';
import Donator from './pages/Donator.jsx';




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<App/>}>
      <Route path="signup" element ={<Signup/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="consumer" element={<Consumer/>}/>
      <Route path="donator" element={<Donator/>}/>
      <Route path="/" element ={<Protected/>}>
        <Route path="/" index element={<Home/>}/>
      </Route>
    </Route>
  )
);

// Replace this line
// const root = ReactDOM.createRoot(document.getElementById('root'));

// With this line
ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

