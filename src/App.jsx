import React, { useState } from 'react';
import UserRegister from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserPassResetReq from './Components/UserPassResetReq';
import UserPassReset from './Components/UserPassReset';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import GetCallUsingToken from './Components/GetCallUsingToken';
import MyAccount from './Components/MyAccount';
import DashContent from './Components/DashContent';
import ColorShades from './Components/ColorShades';

const App = () => {
  const [token, setToken] = useState('')
  return (
    <div className="app-container" style={{ backgroundColor: '#f0f0f0' }}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<UserRegister />} />
      <Route path='/login' element={<UserLogin setToken={setToken} />} />
      {/* <Route path='/getuser' element={<GetCallUsingToken token={token}  />} /> */}
      <Route path='/forgot-password' element={<UserPassResetReq />} />
      <Route path='/reset-password/:token' element={<UserPassReset />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/dashboard/myaccount' element={<MyAccount token={token} />} />
      <Route path='/dashboard/shades' element={<ColorShades />} />
      <Route path='/dashboard/complementary' />

     </Routes>
     </BrowserRouter>

    </div>
  );
};

export default App;