/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
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
    img: meal1,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Two',
    img: meal2,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Three',
    img: meal3,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Four',
    img: meal4,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Five',
    img: meal5,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Six',
    img: meal6,
    description: 'Some description goes here, a logn description.',
  },
  {
    name: 'Meal Seven',
    img: meal7,
    description: 'Some description goes here, a logn description.',
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: '#72b600',
        width: '60px',
        padding: '25px',
        borderRadius: '24px 0 0 24px',
        boxSizing: 'border-box',
        zIndex: 1,
        position: 'absolute',
        right: 0,
      }}
      onClick={onClick}
    />
  );
}

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
      }}
      onClick={onClick}
    />
  );
}

function MealSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-4/5 h-4/5 my-auto main-slider-container">
      <div className="flex flex-col gap-3 mb-4">
        <h1 className="text-center font-extrabold tracking-widest text-2xl">CHEF&apos;S SPECIALTY</h1>
        <p className="text-xxs text-center text-gray-500">Please select our spcial meals.</p>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id} className="meal-card flex items-center justify-center text-center">
              <div>
                <img src={d.img} alt="meal1" className="m-0 p-0 w-64 rounded-full hover:cursor-pointer" />
              </div>
              <div className="text-center my-6">
                <p className="font-bold my-2 uppercase hover:cursor-pointer">{d.name}</p>
                <p className="text-xxs text-gray-500">You gonna love our meal!</p>
                <p className="text-gray-500">{d.description}</p>
              </div>
              <div className="">
                <ul className="flex justify-center gap-5">
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaFacebookF /></li>
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaTwitter /></li>
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaInstagramSquare /></li>
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MealSlider;
