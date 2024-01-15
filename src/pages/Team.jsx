import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Team = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='team'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>Team</h1>
      </div>

    </div>
  );
};

export default Team;
