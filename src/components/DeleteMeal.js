import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import {
  getAllMeals, deleteMeal, removeMeal, updateAvailability, updateWhenAvailable,
} from '../features/admin/adminSlice';

const DeleteMeal = () => {
  const allMeals = useSelector((state) => state.meals.allMeals);
  const isLoading = useSelector((state) => state.meals.isLoading);
  const isError = useSelector((state) => state.meals.isError);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    if (user.data.admin == null) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMeals());
  }, [dispatch]);

  const handleDeleteMeal = (mealId) => {
    dispatch(removeMeal(mealId));
    dispatch(deleteMeal(mealId));
  };

  const updateAvailabilityOfMeals = (mealId, available) => {
    const newAvailability = !available;
    dispatch(updateWhenAvailable({ id: mealId, available: newAvailability }));
    dispatch(updateAvailability({ id: mealId, available: newAvailability }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:
        {isError}
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col ss:flex-row">
      <Navigation />
      <div className="container ss:overflow-scroll mx-auto mt-8 p-10">
        <h1 className="text-2xl font-bold mb-10 ml-8">My Meals(s):</h1>
        <div className="flex flex-col">
          {allMeals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-lg shadow-md border-gray-300 border p-5 mr-1 mb-4 flex flex-col ss:flex-row items-center justify-between">
              <img src={meal.photo} alt={meal.name} className="w-16 h-16 object-cover rounded mr-4" />
              <h2 className="text-lg font-semibold flex-grow text-center">{meal.name}</h2>
              {meal.available ? (
                <button type="button" onClick={() => updateAvailabilityOfMeals(meal.id, meal.available)} className="bg-red-500 text-white py-2 px-4 mr-4 rounded">
                  Not Available
                </button>
              ) : (
                <button type="button" onClick={() => updateAvailabilityOfMeals(meal.id, meal.available)} className="bg-green text-white py-2 px-4 mr-4 rounded">
                  Available
                </button>
              )}
              <button type="button" onClick={() => handleDeleteMeal(meal.id)} className="bg-red-500 text-white py-2 px-4 mr-4 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteMeal;
