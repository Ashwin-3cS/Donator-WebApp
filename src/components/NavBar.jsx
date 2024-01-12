import React from "react";

function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">
      <a href="#home" className="text-white  text-xl font-bold">Being Human</a>
      <nav className="flex space-x-4">
        <button className="text-white"> Login</button>
        <a href="#home" className="text-white  " >Home</a> 
        <a href="#ourwork" className="text-white">OurWork</a>
        <a href="#team" className="text-white">Team</a>
        <a href="#contact" className="text-white">Contact</a> 
      </nav>
    </header>
  );
}

export default NavBar;
