import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import AutoImageCarousel from '../components/AutoImageCarousel';
import SearchBar from '../components/SearchBar';
import RestaurantGrid from '../components/RestaurantGrid';

const Consumer = () => {
  const navigate = useNavigate();
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [location, setLocation] = useState('');

  const goToHomePage = () => {
    navigate('/');
  };

  const images = [
    'https://picsum.photos/id/1084/536/354?grayscale',
    'https://picsum.photos/seed/picsum/536/354',
    'https://picsum.photos/id/237/536/354',
  ];

  const handleSearchClick = () => {
    setSearchClicked(true);
    // setSearchResult(`Location: ${location}`);
  };

  return (
    <div className='consumer'>
      <NavBar navigate={navigate}/>
      <div className='full-vh-background  pt-[60px] '>
        <h1 className='text-white text-[48px] ml-[40%] italic'>HOW IT WORKS</h1>
        <AutoImageCarousel images={images} />
        
        <div className='flex flex-col ml-[780px] mt-[70px] text-white text-3xl '>
          <p className='mb-[10px]'>1. Choose Your Location</p>
          <p className='mb-[10px]'>2. Pick Your Food</p>
          <p className='mb-[10px]'>3. Make Your way to the Location</p>
          <p>4. Grab Your Food</p>
        </div>
        
        <div>
          <SearchBar onSearchClick={handleSearchClick} setLocation={setLocation} />
        </div>
        
        {searchClicked && (
          <div>
            <p>{searchResult}</p>
            <RestaurantGrid />
          </div>
        )}
      
        <h1 className='mt-[800px] text-black text-3xl text-center'>hi consumer</h1>
        <h1 className='mt-[800px]'>fine ah</h1>
      </div>
    </div>
  );
};

export default Consumer;




