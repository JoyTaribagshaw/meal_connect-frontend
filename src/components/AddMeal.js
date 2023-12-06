import React, { useState } from 'react';

const AddMeal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  const [available, setAvailability] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name, description, price, photo, available,
    });
  };

  return (
    <div className="mx-auto my-8 p-6 bg-white rounded-md w-[90%]">
      <h2 className="text-2xl font-bold mb-4">Add new meal</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <input
            className="w-full px-3 py-5 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            placeholder="Name:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-5 border rounded-md focus:outline-none focus:border-blue-500"
            id="description"
            placeholder="Description:"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-5 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="price"
            placeholder="Price:"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-5 border rounded-md focus:outline-none focus:border-blue-500"
            type="link"
            id="photo"
            placeholder="Uplaod image url:"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-5 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="available"
            placeholder="Availability: True or False"
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <button
          className="bg-green text-white py-2 px-10 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMeal;
