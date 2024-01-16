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

  // Dummy data for demonstration purposes
  const restaurants = [
    {
      name: 'Restaurant 1',
      foods: ['Food 1', 'Food 2', 'Food 3'],
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
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Available Restaurants and Foods</h2>
      <div className="grid grid-cols-3 gap-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
            <div>
              <ul>
                {restaurant.foods.map((food, foodIndex) => (
                  <li key={foodIndex}>{food}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handlePickup(restaurant.name, restaurant.foods[0])}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Pickup
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Picked Up Foods</h2>
        <p>{pickedUpFoods.map((item, index) => `${item.restaurant} - ${item.food}`).join(', ')}</p>
      </div>
    </div>
  );
};

export default RestaurantGrid;
