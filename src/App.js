import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/rubik";
import './App.css';
import Home from './pages/Home';
import BuyAstor from './pages/BuyAstor';
import ICOReferralDetails from './pages/ICOReferralDetails';
import TokenPage from './pages/TokenPage';
import IncomePage from './pages/IncomePage';
import Landing from './PagesCopy/Landing';
import Referral from "./pages/Referral";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-astor" element={<BuyAstor />} />
          <Route path="/ico-referral-details" element={<ICOReferralDetails />} />
          <Route path="/token-page" element={<TokenPage />} />
          <Route path="/income-page" element={<IncomePage />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Referral" element={<Referral />} />

        </Routes>
      </Router>
    </div>);


}

export default App;
