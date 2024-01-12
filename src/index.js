import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";

import App from "./components/App.jsx";



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





ReactDOM.render(
  <div>
    <App/>
  </div>,
document.getElementById("root")
);