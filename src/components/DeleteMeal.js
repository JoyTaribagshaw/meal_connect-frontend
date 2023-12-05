import React from 'react';

function DeleteMeal() {
  return (
    <div className="mx-auto my-8 p-6 bg-white rounded-md">
      <h1 className="text-2xl font-bold mb-10">My Meal(s):</h1>
      <div className="flex flex-col">
        <div className="bg-white rounded-lg shadow-md border-gray-300 border p-7 mr-1 mb-4 flex items-center justify-between">
          <img src="" alt="meal-img" className="w-16 h-16 object-cover rounded mr-4" />
          <h2 className="text-lg font-semibold flex-grow text-center">Title</h2>
          <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMeal;
