import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import backgroundImage from '../img/meals/meal66.jpg';
import logo from '../img/logo2.png';
import { userSignup } from '../features/registration/registrationSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isRegistered, error } = useSelector((state) => state.registration);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (isRegistered) {
      navigate('/login');
    }
  }, [isRegistered, navigate]);

  const handeleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(userSignup(state));
    } catch (error) {
      throw error.message;
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col ss:flex-row h-screen">
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}
      >
        <img className="w-56" src={logo} alt="logoImg" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <span className="w-16 mb-5 border-b-2 border-orange" />
        <h3 className="mb-4 text-center">
          Welcome to Connect-meal booking site!
        </h3>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-xs">
            <form
              className="bg-white px-8 pt-6 pb-8 mb-4"
              onSubmit={handeleSubmit}
            >
              {error && <p className="text-red-500">{error}</p>}
              <div className="mb-4">
                <input
                  type="text"
                  id="username"
                  value={state.name}
                  onChange={handleChange}
                  name="name"
                  required
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="confirm-password"
                  name="password_confirmation"
                  value={state.password_confirmation}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="submit"
                  disabled={isLoading}
                  className={`bg-green hover:bg-orange text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline cursor-pointer w-full ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  value={isLoading ? 'Signing up...' : 'Signup'}
                />
              </div>
              <div className="text-center py-6">
                <Link
                  to="/login"
                  className="text-red-500 self-center hover:text-green"
                >
                  Login
                </Link>
              </div>
              <div className="text-center">
                <h4>If you have an account.</h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
