import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/SignUp';
import Main from './components/Main';
import ReservationPage from './components/ReservationPage';
import Details from './components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
