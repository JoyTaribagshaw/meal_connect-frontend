import React from 'react';
import backgroundImage from '../img/meal6.jpg';
import logo from '../img/logo2.png';

function Splash() {
  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col">
        <img className="w-56" src={logo} alt="logoImg" />
        <h1 className="text-white text-4xl self-center">WELCOME</h1>
      </div>
      <div className="flex gap-12 mt-32">
        <button type="button" className="bg-green px-6 py-2 rounded-3xl w-36 text-white shadow-md hover:bg-orange">Login</button>
        <button type="button" className="bg-white px-6 py-2 rounded-3xl w-36 text-green shadow-xl shadow-black-500 hover:bg-orange hover:text-white">Signup</button>
      </div>
    </div>
  );
}

export default Splash;
