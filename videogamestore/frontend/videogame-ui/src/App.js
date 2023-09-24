import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (

    
    <div class="App">
      <h1 id="title" >Video Game Store</h1>
      <div> 
<Router>
  <nav>
    <Link id="nav-link" to=""> Home</Link>
    <Link id="nav-link" to=""> Search</Link>
    <Link id="nav-link" to=""> Catalog</Link>
    <Link id="nav-link" to=""> Checkout</Link>
    <Link id="nav-link" to=""> Video Game</Link>
    <Link id="nav-link" to=""> Order Confirmed</Link>
    <Link id="nav-link" to=""> Your Cart</Link>
  </nav>
      <Routes>
        {/* <Route path="" element={<Home />} />
        <Route path="/add-game" element={<Search />} />
        <Route path="" element={<Catalog />} />
        <Route path="" element={<YourCart />} />
        <Route path="" element={<Checkout />} />
        <Route path="" element={<VideoGame />} />
        <Route path="" element={<OrderConformation />} /> */}
      </Routes>
</Router> 
</div>

<div class="container">
  <div class="container-item1"> 
  <h1> Welcome to *enter store name here* ! </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
  </div>
  <div class="container-item2">
    <img id="banner" src="https://www.wallpaperflare.com/static/264/230/517/artwork-video-games-collage-game-wallpaper.jpg" 
    alt="game-collage"
    height="550px"
    width="1150px" />
  </div>
</div>

    </div>

  );
}

export default App;
