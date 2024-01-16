import React, { useState } from 'react';

const RestaurantGrid = () => {
  const [pickedUpFoods, setPickedUpFoods] = useState([]);

  const handlePickup = (restaurantName, foodItem) => {
    const newPickedUpFood = {
      restaurant: restaurantName,
      food: foodItem,
    };

    setPickedUpFoods((prevPickedUpFoods) => [...prevPickedUpFoods, newPickedUpFood]);
  };

  const handleRemoveAll = () => {
    setPickedUpFoods([]);
  };

  // Dummy data for demonstration purposes
  const restaurants = [
    {
      name: 'McDONALDS',
      foods: ['FrenchFries', 'Burger', 'Noodles'],
    },
    {
      name: 'Restaurant 2',
      foods: ['Food 4', 'Food 5', 'Food 6'],
    },
    {
      name: 'Restaurant 3',
      foods: ['Food 7', 'Food 8', 'Food 9'],
    },
  ];

  return (
    <div className="mt-[40px]">
      <h2 className="text-xl font-bold mb-2 text-cyan-200">Available Restaurants and Foods</h2>
      <div className="grid grid-cols-3 gap-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
            <div>
              <ul>
                {restaurant.foods.map((food, foodIndex) => (
                  <li key={foodIndex}>
                    {food}
                    <button
                      onClick={() => handlePickup(restaurant.name, food)}
                      className="ml-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Pick
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 ml-[10px] border rounded-md mr-[85%]	border-cyan-600	">
        <h2 className="text-xl font-bold mb-2 text-cyan-200 ml-[10.5%] ">Picked Up Foods</h2>
        <ul className="text-white ml-[8px]">
          {pickedUpFoods.map((item, index) => (
            <li key={index}>{`${item.restaurant} - ${item.food}`}</li>
          ))}
        </ul>
        {pickedUpFoods.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300  mb-[10px] ml-[40px]"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantGrid;
