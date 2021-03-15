import React from 'react';
import { soldProducts } from '../data';

const Mockup = () => {
  return (
    <div className="test">
      {soldProducts.map((mockup) => {
        const { id, name, subtitle, image } = mockup;

        return (
          <main key={id} className="sold">
            <img src={image} alt={name} className="mockup-img" />
            <div className="info-sold">
              <h1>{name}</h1>
              <h4>{subtitle}</h4>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Mockup;
