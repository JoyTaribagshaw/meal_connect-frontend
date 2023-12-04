/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './mealInfo.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import meal1 from '../../img/meals/meal1.jpg';
import meal2 from '../../img/meals/meal2.jpg';
import meal3 from '../../img/meals/meal3.jpg';
import meal4 from '../../img/meals/meal4.jpg';
import meal5 from '../../img/meals/meal5.jpg';
import meal6 from '../../img/meals/meal6.jpg';
import meal7 from '../../img/meals/meal7.jpg';

const data = [
  {
    name: 'Meal One',
    type: 'testy',
    img: meal1,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Two',
    type: 'delicious',
    img: meal2,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Three',
    type: 'spicy',
    img: meal3,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Four',
    type: 'yammi',
    img: meal4,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Five',
    type: 'spicy',
    img: meal5,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Six',
    type: 'testy',
    img: meal6,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
  {
    name: 'Meal Seven',
    type: 'testy',
    img: meal7,
    description: 'Some description',
    price: '$25',
    avaliable: 'Yes',
  },
];

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#72b600',
        width: '60px',
        padding: '25px',
        borderRadius: '0 24px 24px 0',
        boxSizing: 'border-box',
        zIndex: 1,
        position: 'absolute',
        left: 0,
        top: '300px',
      }}
      onClick={onClick}
    />
  );
}

function MealInfo() {
  const [selectedMeal, setSelectedMeal] = useState(data[0]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: null,
    afterChange: (current) => {
      setSelectedMeal(data[current]);
    },
  };

  return (
    <div className="w-4/5 h-4/5 my-auto meal-detail-container flex">
      <Slider className="w-seventyP" {...settings}>
        {data.map((d) => (
          <div
            key={d.id}
            className="meal-card flex items-center justify-center text-center"
          >
            <div>
              <img
                src={d.img}
                alt="meal1"
                className="m-auto p-auto w-72 rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-col justify-between items-end w-full">
        <div className="show-detail w-full mr-6">
          <p className="text-right text-2xl font-bold">{selectedMeal.name}</p>
          <p className="text-xs text-right text-gray-500 mb-5">Please select our spcial meals.</p>
          <div className="flex justify-between items-center bg-gray-300 w-full p-2">
            <p>Type</p>
            <p className="overflow-hidden">{selectedMeal.type}</p>
          </div>
          <div className="flex justify-between items-center bg-white w-full p-2">
            <p>Desc</p>
            <p className="overflow-hidden">{selectedMeal.description}</p>
          </div>
          <div className="flex justify-between items-center bg-gray-300 w-full p-2">
            <p>Price</p>
            <p>{selectedMeal.price}</p>
          </div>
          <div className="flex justify-between items-center bg-white w-full p-2">
            <p>Avaliable</p>
            <p>{selectedMeal.avaliable}</p>
          </div>
          <p className="text-xs">
            <strong>5% off</strong>
            for
            <em>Christmas Day</em>
          </p>
        </div>
        <div className="m-2">
          <button
            className="text-white bg-green mr-4 p-3 rounded-xl mt-5"
            type="button"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealInfo;
