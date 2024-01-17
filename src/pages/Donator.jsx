
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import DonorImageCarousel from '../components/DonorImageCarousel';
import RegistrationPortal from '../components/RegistrationPortal';


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
        <DonorImageCarousel/>
        <RegistrationPortal/>
       
      
      </div>
    </div>
  );
};


export default Donator;
