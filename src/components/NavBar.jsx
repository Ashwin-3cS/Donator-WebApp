import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { auth } from "../firebase";


function NavBar() {
  const navigation = useNavigate();

  const handleLogout=async() =>{
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigation("/login");
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">
      <a href="#home" className="text-white  text-xl font-bold logo ">Being Human</a>
      <nav className="flex space-x-4">
        <button onClick={handleLogout} className="text-white"> LogOut</button>
        <a href="#home" className="text-white  " >Home</a> 
        <a href="#ourwork" className="text-white">OurWork</a>
        <a href="#team" className="text-white">Team</a>
        <a href="#contact" className="text-white">Contact</a> 
      </nav>
    </header>
  );
}

export default NavBar;
