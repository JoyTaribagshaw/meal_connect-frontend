import React from 'react';
import meal1 from '../img/meals/meal1.jpg';
import Navigation from './navigation/Navigation';

const DeleteMeal = () => {
  const meals = [
    {
      id: 1,
      title: 'Meal 1',
      image: meal1,
    },
  ];

  return (
    <div className="h-screen flex justify-between">
      <Navigation />
      <div className="container mx-auto mt-8 ml-10 p-10">
        <h1 className="text-2xl font-bold mb-10">My Meals(s):</h1>
        <div className="flex flex-col">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-lg shadow-md border-gray-300 border p-7 mr-1 mb-4 flex items-center justify-between">
              <img src={meal.image} alt={meal.title} className="w-16 h-16 object-cover rounded mr-4" />
              <h2 className="text-lg font-semibold flex-grow text-center">{meal.title}</h2>
              <button type="button" className="bg-red-500 text-white py-2 px-4 mr-4 rounded">Available</button>
              <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>

            </div>
          ))}
        </div>
      </div>
      <button type="button" className="bg-green text-white py-2 px-4 absolute rounded bottom-10 right-10">Reserve</button>
    </div>
  );
};

export default DeleteMeal;
