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

const MealDetails = () => {
  const [mealDetails, setMealDetails] = useState({});
  const [error, setError] = useState(null); // Ajout d'un état pour stocker les erreurs
  const token = localStorage.getItem('access_token');
  const { id } = useParams();
  const url = `http://127.0.0.1:4000/api/v1/meals/${id}`;

  useEffect(() => {
    const getMealsDetails = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.data) {
          setMealDetails(response.data);
        }
      } catch (error) {
        setError(error);
      }
    };

    getMealsDetails();
  }, [id, token, url]);

  if (error) {
    return <div>Error fetching meal details.</div>;
  }

  return (
    <div className="w-full h-full my-auto meal-detail-container flex ss:flex-row flex-col items-center">
      <div className="w-seventyP">
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
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between items-end w-full">
        <div className="show-detail w-full">
          <p className="text-right text-2xl font-bold">{mealDetails.name}</p>
          <p className="text-xs text-right text-gray-500 mb-5">Please select our special meals.</p>
          <div className="flex justify-between ss:right items-center bg-white w-full p-2">
            <p>Desc</p>
            <p className="overflow-hidden">{mealDetails.description}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-300 w-full p-2">
            <p>Price</p>
            <p>{`${mealDetails.price} $`}</p>
          </div>
          <p className="text-xs">
            <strong> 5% off </strong>
            for
            <em>Christmas Day</em>
          </p>
        </div>
        <div className="m-2">
          <Link
            className="text-white bg-green mr-4 p-3 rounded-xl mt-5"
            to={`/meal/${id}`}
          >
            Reserve
          </Link>
        </div>
      </div>
      <Link to="/dashboard" className="flex justify-start text-xl bg-[#72b600] w-12 p-2 z-50 absolute text-center left-0 bottom-0 text-white rounded-r-full">&#x25c0;</Link>
    </div>
  );
}

export default MealDetails;
