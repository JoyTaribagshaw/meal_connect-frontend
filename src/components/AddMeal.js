import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMeal } from '../features/admin/adminSlice';

const AddMeal = ({ addMeal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  const [available, setAvailability] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mealData = {
      name,
      description,
      price,
      photo,
      available,
    };

    try {
      const res = await addMeal(mealData);
      if (res.meta.requestStatus==="fulfilled") {
        setSuccessMessage('Meal added successfully');
        setName('');
        setDescription('');
        setPrice('');
        setPhoto('');
        setAvailability('');
      }
      if(res.error){
        setSuccessMessage('Meal not added');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add new meal</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
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
            placeholder="Upload image url:"
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

AddMeal.propTypes = {
  addMeal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addMeal: (mealData) => dispatch(addMeal(mealData)),
});

export default connect(null, mapDispatchToProps)(AddMeal);
