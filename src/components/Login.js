import React from 'react';
import backgroundImage from '../img/meals/meal77.jpg';
import logo from '../img/logo2.png';

const Login = () => (
  <div className="flex h-screen">
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
      <h3 className="mb-4 text-center font-bold">Welcome back !</h3>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <input type="email" id="user-email" name="email" required className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
            </div>
            <div className="mb-6">
              <input type="password" id="user-password" name="password" required className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
              <input type="submit" value="Login" className="bg-green hover:bg-orange text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline cursor-pointer w-full" />
            </div>
            <div className="text-center py-6">
              <a href="#Signup" className="text-red-500 self-center hover:text-green">Sign-up</a>
            </div>
            <div className="text-center">
              <h4>If you dont have an accout.</h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
