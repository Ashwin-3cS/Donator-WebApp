import React, { useState } from 'react';
import "../App.css";

const SearchBar = ({ onSearchClick, setLocation }) => {
  const [locationInput, setLocationInput] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    setSearchResult(`Location: ${locationInput}`);
    setLocation(locationInput); // Set the location state here
    onSearchClick(); // Trigger the search click
  };

  return (
    <div className="ml-[43%] mt-[6%] relative">
      <input
        type="text"
        placeholder ="Enter Location"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
        className=" search-bar-cons w-40 py-2 px-4  border-cyan-600 border-[2px] rounded-l-md focus:outline-none focus:ring focus:border-cyan-300"
        spellCheck="false"      
      />
      <button
        className="ml-[2px] py-2 px-4 bg-cyan-500 text-white rounded-r-md hover:bg-cyan-600 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
      {searchResult && (
        <p className="absolute top-full text-[20px] left-0 mt-[0] text-slate-300	">{searchResult}</p>
      )}
    </div>
  );
};

export default SearchBar;

