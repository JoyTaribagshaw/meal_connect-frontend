import React from 'react';
import Navigation from './navigation/Navigation';
import MealInfo from './cards/MealInfo';

function Details() {
  return (
    <div className="flex">
      <Navigation />
      <MealInfo />

    </div>
  );
}

export default Details;
