import React from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex-box">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
