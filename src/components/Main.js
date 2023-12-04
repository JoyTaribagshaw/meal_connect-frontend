import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navigation from './navigation/Navigation';
import MealSlider from './navigation/MealSlider';

function Main() {
  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" replace={true} />;
  // }

  return (
    <div className="flex">
      <Navigation />
      <MealSlider />
    </div>
  );
}

export default Main;
