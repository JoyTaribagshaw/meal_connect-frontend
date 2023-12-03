import React from 'react';
import Navigation from './navigation/Navigation';
import MealSlider from './navigation/MealSlider';

function Main() {
  return (
    <div className="flex">
      <Navigation />
      <MealSlider />
    </div>
  );
}

export default Main;
