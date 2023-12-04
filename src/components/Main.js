import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UserProfile from './UserProfile';
import Navigation from './navigation/Navigation';
import MealSlider from './navigation/MealSlider';

function Main() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="flex">
      <Navigation />
      <MealSlider />
      <UserProfile />
    </div>
  );
}

export default Main;
