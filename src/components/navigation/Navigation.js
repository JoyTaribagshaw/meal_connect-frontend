import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import { userLoggedOut } from '../../features/login/loginSlice';
import './navigation.css';
import logo from '../../img/logo1.png';
import tw from '../../img/tw.svg';
import fb from '../../img/fb.svg';
import pint from '../../img/pint.svg';
import gp from '../../img/gp.svg';
import vi from '../../img/vi.svg';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user_data'));

  const handleLogout = () => {
    dispatch(userLoggedOut());
    navigate('/login');
  };
  const isAdmin = user && user.data && user.data.admin;
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav h-screen flex flex-col :flex-row justify-between border-r-4 border-gray-100 p-0 w-[25%] ml-2 mb-2">
      <div className="header">
        <div className="ss:w-full flex flex-row ss:flex-col justify-between items-center">
          <img src={logo} alt="logoImg" className="w-20 mb-3 ss:w-36" />
          <button className="mx-3 text-orange w-9" type="button" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (<span className="block ss:hidden"><VscMenu /></span>) : (<span className="block ss:hidden"><IoMdClose /></span>) }
          </button>
        </div>
        <ul className={`flex flex-col gap-0 ss:block ${isMobile ? 'hidden' : 'top-20'}`}>
          <li className="w-full bg-green hover:bg-green active:bg-green focus:ring hover:text-white p-2 border-b-2 sm:border-none sm:border-b sm:hover:border-b-2"><Link to="/dashboard" className="">Meal</Link></li>
          <li className="w-full hover:bg-green active:bg-green hover:text-white p-2 border-b-2 sm:border-none sm:border-b sm:hover:border-b-2"><Link to="/reservation" className="">Reserve</Link></li>
          <li className="w-full hover:bg-green active:bg-green hover:text-white p-2 border-b-2 sm:border-none sm:border-b sm:hover:border-b-2"><Link to="/myReservations" className="">My Reservations</Link></li>
          {isAdmin && (<li className="w-full hover:bg-green active:bg-green hover:text-white p-2 border-b-2 sm:border-none sm:border-b sm:hover:border-b-2"><Link to="/addmeal" className="">Add meal</Link></li>)}
          <li className="w-full hover:bg-green active:bg-green hover:text-white p-2 border-b-2 sm:border-none sm:border-b sm:hover:border-b-2"><Link to="/deleteMeal" className="">Delete meal</Link></li>
          <li className="w-full hover:bg-green active:bg-green hover:text-white p-2">
            <button type="button" onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="ss:w-full hidden ss:block">
        <ul className="flex gap-3 p-2">
          <li><a href="#new"><img src={tw} alt="tw" className="w-4" /></a></li>
          <li><a href="#new"><img src={fb} alt="fb" className="w-4" /></a></li>
          <li><a href="#new"><img src={gp} alt="gp" className="w-4" /></a></li>
          <li><a href="#new"><img src={vi} alt="vi" className="w-4" /></a></li>
          <li><a href="#new"><img src={pint} alt="pint" className="w-4" /></a></li>
        </ul>
        <div className="p-2">
          <p className="text-xs">&copy; 2023 connect-meal </p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
