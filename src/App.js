import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
