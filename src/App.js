import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/SignUp';
import Main from './components/Main';
import AddMealNav from './components/AddMealNav';
import UserProfile from './components/UserProfile';
// import DeleteMeal from './components/DeleteMeal';

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
          {/* <Route path="/deletemeal" element={<DeleteMeal />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
