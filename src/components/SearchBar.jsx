import React, { useState } from 'react';

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
        placeholder="Enter Location"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
        className="w-40 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        className="ml-[2px] py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300"
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

