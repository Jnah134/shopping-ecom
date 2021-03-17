import React from 'react';
import Hero from './components/Hero';
import ClothesList from './components/ClothesList';

function App() {
  return (
    <div>
      <Hero />
      <div className="container">
        <ClothesList />
      </div>
    </div>
  );
}

export default App;
