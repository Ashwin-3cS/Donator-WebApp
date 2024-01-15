
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
      <h2 className='mt-[200px]'>Donator Page</h2>
      {/* Add your content for the Consumer page */}
    </div>
  );
};

export default Donator;
