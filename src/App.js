import React from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoldProduct from './components/SoldProduct';

function App() {
  return (
    <div className="flex-box">
      <Navbar />
      <Hero />
      <SoldProduct />
    </div>
  );
}

export default App;
