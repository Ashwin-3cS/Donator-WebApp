import { signOut } from "firebase/auth";
import React from "react";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import "../App.css";


function NavBar({navigate}) {
  const goToHome = (event) => {
    event.preventDefault(); // Prevent the default behavior
    navigate('/');
  };




  const navigation = useNavigate();

  const handleLogout=async() =>{
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigation("/login");
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">
      {/* <a href="#home" className="text-white  text-xl font-bold logo ">Being Human</a> */}
        <Link to="/home" className="text-white text-xl font-bold logo" onClick={goToHome}>
        Being Human
        </Link>
      <nav className="flex space-x-4">
        <button onClick={handleLogout} className="text-white  logout-button"> LogOut</button>
        <NavLink to="/consumer" className="text-white"  activeClassName="active">
          Consumer
        </NavLink>
        <NavLink to="/donator" className="text-white">
          Donator
        </NavLink>
       
        {/* <Link to="/home" className="text-white">
          Home
        </Link> */}
        <Link to="/home" className="text-white" onClick={goToHome}>
          Home
        </Link>

        <NavLink to="/ourwork" className="text-white">
          OurWork
        </NavLink>
        <NavLink to="/team" className="text-white">
          Team
        </NavLink>
        <NavLink to="/contact" className="text-white">
          Contact
        </NavLink>
        

      </nav>
    </header>
  );
}

export default NavBar;






//tried some other thing

// import { signOut } from "firebase/auth";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";

// function NavBar({ navigate }) {
//   const handleLogout = async () => {
//     await signOut(auth);
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate("/login");
//   }

//   return (
//     <header className="fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">
//       <a href="#home" className="text-white  text-xl font-bold logo ">Being Human</a>
//       <nav className="flex space-x-4">
//         <button onClick={handleLogout} className="text-white"> LogOut</button>
       
//         <Link to="/home" className="text-white">
//           Home
//         </Link>

//         <a href="#ourwork" className="text-white">OurWork</a>
//         <a href="#team" className="text-white">Team</a>
//         <a href="#contact" className="text-white">Contact</a> 
//         <Link to="/consumer" className="text-white">
//           Consumer
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;







