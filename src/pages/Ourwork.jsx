import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Ourwork = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='ourwork'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>ourwork</h1>
      </div>

    </div>
  );
};

export default Ourwork;
