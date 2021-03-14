import React from 'react';
import data from '../data';

const SoldProduct = () => {
  return (
    <article className="mockup-product">
      {data.map((item) => {
        const { id, image, name, oldPrice, newPrice } = item;

        return (
          <div className="mockup" key={id}>
            <img src={image} alt={name} className="sold-img" />
          </div>
        );
      })}
    </article>
  );
};

export default SoldProduct;
