/* eslint-disable no-template-curly-in-string */
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';

import Admin from './Admin';
import Home from './Home';
import Catalog from './Catalog'
import Cart from './Cart'
import Search from './Search';
import GameDetails from './GameDetails';




import ShippingPage from './ShippingPage';
import ConfirmationPage from './ConfirmationPage';









function App() {

  
  
  return (
    
    
    <div class="App">
      <h1 id="title" >Game Vault</h1>
      <div> 
<Router>

  <nav>
    <Link id="nav-link" to=""> Home</Link>
    <Link id="nav-link" to="/all-games"> Catalog</Link>
    <Link id="nav-link" to="/search-game"> Search</Link>
    
    <Link id="nav-link" to="/your-cart"> Your Cart   </Link>


  </nav>
      <Routes>

        <Route path="/admin/add-game" element={<Admin/>} />
        <Route path="" element={<Home />} />
        <Route path="/all-games" element={<Catalog />} />
        <Route path="/your-cart" element={<Cart />} />
        <Route path="/search-game" element={<Search />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/shipping-page" element={<ShippingPage />} />
        <Route path="/thank-you" element={<ConfirmationPage/>} />
      </Routes>
</Router> 
</div>


    </div>

  );
}

export default App;
