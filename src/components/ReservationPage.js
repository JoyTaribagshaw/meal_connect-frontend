import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation, allReservation, removeReservation } from '../features/reservation/reservationSlice';
import Navigation from './navigation/Navigation';

const ReservationPage = () => {
  const reservationList = useSelector((state) => state.reservation.allReserve);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allReservation());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservation(id))
      .then(() => {
        dispatch(removeReservation(id));
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div className="h-screen flex flex-col ss:flex-row">
      <Navigation />
      <div className="container ss:overflow-scroll mx-auto p-10">
        <h1 className="text-2xl font-bold mb-10 ml-8">My Reservation(s):</h1>
        <div className="flex flex-col items-center">
          {reservationList.map((reservation) => (
            <div
              key={reservation.reservation.id}
              className="bg-white rounded-lg shadow-md border-gray-300 border p-5 mb-4 flex flex-col ss:flex-row items-center justify-between w-full ss:w-full"
            >
              <img
                src={reservation.meal.photo}
                alt={reservation.meal.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h2 className="text-lg font-bold flex-grow text-center">
                  {reservation.meal.name}
                </h2>
                <p className="text-center">
                  Total price:
                  {' '}
                  {reservation.total.total_price}
                  {' '}
                  $
                </p>
                <p className="text-center">
                  Quantity:
                  {' '}
                  {reservation.reservation.quantity}
                </p>
                <p className="text-center">
                  Spicy:
                  {' '}
                  {reservation.reservation.spicy_level}
                </p>
              </div>
              <div>
                <h2 className="text-center">
                  Date:
                  {' '}
                  {reservation.reservation.reserve_date}
                </h2>
                <p className="text-center">
                  Time:
                  {' '}
                  {reservation.reservation.reserve_time}
                </p>
              </div>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => handleDelete(reservation.reservation.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
