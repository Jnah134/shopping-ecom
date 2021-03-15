import React from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoldProduct from './components/SoldProduct';
import Mockup from './components/Mockup';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <div className="container">
        <Mockup />
        <SoldProduct />
      </div>
    </div>
  );
}

export default App;
