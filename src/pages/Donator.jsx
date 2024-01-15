
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Donator = () => {

  const navigate=useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };


  return (
    <div className='donator'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>hi donator</h1>
      
      </div>
    </div>
  );
};

export default Donator;
