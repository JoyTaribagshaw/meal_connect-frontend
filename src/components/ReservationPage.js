import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './navigation/Navigation';

const ReservationPage = () => {
  const [reservationList, setReservationList] = useState([]);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await axios.get('http://127.0.0.1:4000/api/v1/reservations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReservationList(response.data);
    };

    fetchReservations();
  }, [token]);

  return (
    <div className="h-screen flex flex-col ss:flex-row">
      <Navigation />
      <div className="container mx-auto mt-8 ml-10 p-10">
        <h1 className="text-2xl font-bold mb-10">My Reservation(s):</h1>
        <div className="flex flex-col">
          {reservationList.map((reservation) => (
            <div
              key={reservation.reservation.id}
              className="bg-white rounded-lg shadow-md border-gray-300 border p-7 mr-1 mb-4 flex items-center justify-between"
            >
              <img
                src={reservation.meal.photo}
                alt={reservation.meal.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h2
                  className="text-lg font-semibold flex-grow text-center"
                >
                  {reservation.meal.name}
                </h2>
                <p>
                  Total price:
                  {reservation.total.total_price}
                  {' '}
                  $
                </p>

              </div>
              <div>
                <h2
                  className="text-lg font-semibold flex-grow text-center"
                >
                  Date:
                  {' '}
                  {reservation.reservation.reserve_date}
                </h2>
                <p>
                  Time:
                  {' '}
                  {reservation.reservation.reserve_time}
                </p>

              </div>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded"
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
