import './App.css';
import Homepage from './homepage/homepage';
import Login from './login/login';
import Register from './register/register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={
            user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          } />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
