import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/SignUp';
import Main from './components/Main';
import AddMealNav from './components/AddMealNav';
import UserProfile from './components/UserProfile';
import ReservationPage from './components/ReservationPage';
import DeleteMeal from './components/DeleteMeal';
import Details from './components/Details';
import AddReserve from './components/AddReserve';
import Reserve from './components/Reserve';

function App() {
  return (
    <div>
      <UserProfile />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/addmeal" element={<AddMealNav />} />
          <Route path="/myReservations" element={<ReservationPage />} />
          <Route path="/deleteMeal" element={<DeleteMeal />} />
          <Route path="/meals/:id" element={<Details />} />
          <Route path="/meal/:id" element={<AddReserve />} />
          <Route path="/reservation" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
