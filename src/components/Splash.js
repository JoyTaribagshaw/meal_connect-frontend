import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../img/meal6.jpg';
import logo from '../img/logo2.png';

function Splash() {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

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
        <Link to="/login" className="bg-green px-6 py-2 rounded-3xl w-36 text-white text-center shadow-md hover:bg-orange">Login</Link>
        <Link to="/signup" className="bg-white px-6 py-2 rounded-3xl w-36 text-center text-green shadow-xl shadow-black-500 hover:bg-orange hover:text-white">Signup</Link>
      </div>
    </div>
  );
}

export default Splash;
