/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './mealInfo.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MealInfo() {
  const [mealDetails, setMealDetails] = useState({});
  const [state, setState] = useState({
    quantity: '',
    reserve_date: '',
    reserve_time: '',
    spicy_level: '',
  });

  const token = localStorage.getItem('access_token');

  const { id } = useParams();
  const url = `http://127.0.0.1:4000/api/v1/meals/${id}`;

  useEffect(() => {
    const getMealsDetails = async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMealDetails(response.data);
    };
    getMealsDetails();
  }, [id, token, url]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `http://127.0.0.1:4000/api/v1/meals/${id}/reservations`,
      {
        quantity: state.quantity,
        reserve_date: state.reserve_date,
        reserve_time: state.reserve_time,
        spicy_level: state.spicy_level,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-4/5 h-4/5 my-auto meal-detail-container flex">
      <div className="w-2/5">
        {mealDetails && (
          <div
            key={mealDetails.id}
            className="meal-card flex items-center justify-center text-center"
          >
            <div>
              <img
                src={mealDetails.photo}
                alt="meal1"
                className="m-auto p-auto w-72 rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
      <div className=" w-2/5">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 w-full">
            <input
              type="number"
              name="quantity"
              value={state.quantity}
              onChange={handleChange}
              id="quantity"
              step="any"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Quantity"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <select
              name="spicy_level"
              value={state.spicy_level}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Choose spicy Level
              </option>
              <option value="Normal">Normal</option>
              <option value="Hot">Hot</option>
              <option value="Cold">Cold</option>
            </select>

          </div>
          <div className="mb-6 w-full">
            <input
              type="date"
              name="reserve_date"
              value={state.reserve_date}
              onChange={handleChange}
              id="reserve_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Reserve date"
              required
            />
          </div>
          <div className="mb-6 w-full">
            <input
              type="time"
              name="reserve_time"
              value={state.reserve_time}
              onChange={handleChange}
              id="reserve_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Reserve time"
              required
            />
          </div>
          <button type="submit" className="text-white bg-[#72b600] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reserve</button>
        </form>
      </div>
      <Link to="/dashboard" className="flex justify-start text-xl bg-[#72b600] w-12 p-2 z-50 absolute text-center left-0 bottom-0 text-white rounded-r-full">&#x25c0;</Link>
    </div>
  );
}

export default MealInfo;
