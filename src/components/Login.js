import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import backgroundImage from '../img/meals/meal77.jpg';
import logo from '../img/logo2.png';
import { userLoggedIn } from '../features/login/loginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.login);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(userLoggedIn(state));
    } catch (error) {
      throw error.status.message;
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
        <img className="w-36 ss:w-56" src={logo} alt="logoImg" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <span className="w-16 mb-5 border-b-2 border-orange" />
        <h3 className="mb-4 text-center font-bold">Welcome back !</h3>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-xs">
            <form
              className="bg-white px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              {error && <p className="text-red-500">{error}</p>}
              <div className="mb-4">
                <input
                  type="email"
                  id="user-email"
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
                  id="user-password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="submit"
                  value={isLoading ? 'Logging in...' : 'Login'}
                  disabled={isLoading}
                  className={`bg-green hover:bg-orange text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline cursor-pointer w-full ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
              </div>
              <div className="text-center py-6">
                <Link
                  to="/signup"
                  className="text-red-500 self-center text-center hover:text-green"
                >
                  Sign-up
                </Link>
              </div>
              <div className="text-center">
                <h4>If you don&apos;t have an account.</h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
