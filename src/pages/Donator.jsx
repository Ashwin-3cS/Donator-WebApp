
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Donator = () => {

  const navigate=useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };


  return (
    <div>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
      <h2 className=''>Donator Page</h2>
      {/* Add your content for the Consumer page */}
      </div>
    </div>
  );
};

export default Donator;
