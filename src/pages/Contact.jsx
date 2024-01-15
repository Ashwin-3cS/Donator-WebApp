
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate=useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };


  return (
    <div className='contact'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>Contact page</h1>
      
      </div>
    </div>
  );
};

export default Contact;
