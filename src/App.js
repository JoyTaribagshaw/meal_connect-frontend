import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/SignUp';
import Main from './components/Main';

function App() {
  const checkLogin = () => {
    axios.get('http://127.0.0.1:4000/user_profile')
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    checkLogin();
  }, []);
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
