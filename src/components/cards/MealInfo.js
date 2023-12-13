/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './mealInfo.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation, getReservation } from '../../features/reservation/reservationSlice';

const MealInfo = () => {
  const { reservation } = useSelector((state) => state.reservation);
  const [isAdded, setAdded] = useState(false);

  const navigate = useNavigate();

  const [state, setState] = useState({
    quantity: '',
    spicy_level: '',
    reserve_time: '',
    reserve_date: '',
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getReservation(id));
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addReservation({ reservationData: state, id }));
    setAdded(true);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (isAdded) {
      navigate('/myReservations');
    }
  }, [isAdded, navigate]);

  return (
    <div className="ss:overflow-scroll w-full md:w-4/5">
      <div className="w-full mb-32 text-center mt-10">
        <h2 className="text-2xl font-bold vss:text-4xl md:text-3xl md:font-bold">Reserve Your Meal 🥙 🍲 🥗</h2>
        {reservation && (
          <div className="meal-info flex p-4 gap-10 justify-center items-center mt-2 text-xs">
            <p>{reservation.name}</p>
            <p>
              <span className="text-gray-500">Price💸:</span>
              {` ${reservation.price} $`}
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 w-4/5 mx-auto md:w-4/5 md:h-4/5 md:my-auto md:meal-detail-container md:flex md:justify-between">
        <div className="w-full md:w-2/5">
          {reservation && (
            <div
              key={reservation.id}
              className="meal-card flex items-center justify-center text-center"
            >
              <div>
                <img
                  src={reservation.photo}
                  alt={reservation.name}
                  className="m-auto p-auto w-72 rounded-full hover:cursor-pointer"
                  style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-2/5">
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
      </div>
      <Link to="/dashboard" className="absolute vss:bottom-0 md:bottom-0  text-2xl bg-[#72b600] vss:text-xl w-12 p-2 z-50 text-center text-white rounded-r-full ">&#x25c0;</Link>
    </div>

  );
}

export default MealInfo;
