import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './navigation/Navigation';
import ReservationSlider from './navigation/ReservationSlide';

function Reserve() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <div className="flex flex-col ss:flex-row">
      <Navigation />
      <ReservationSlider />
    </div>
  );
}

export default Reserve;
