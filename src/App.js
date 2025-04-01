import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginSignup from './Pages/LoginSignup';
import "./index.css";
import "./App.css";
import CreateWalletPin from './Pages/CreateWalletPin';
import DashBoard from './Pages/DashBoard';
import Overview from './Pages/WalletOverview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} /> 
        <Route path="/create-pin-modal" element={<CreateWalletPin/>}/>
        <Route path='/dashboard/*' element={<DashBoard/>}/>
        <Route path='/wallet' element={<Overview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
