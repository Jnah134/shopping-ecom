import React from 'react';
import { products } from '../data';
import { soldProducts } from '../data';
import { BiChevronRight } from 'react-icons/bi';

const SoldProduct = () => {
  return (
    <article className="mockup-product">
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

      {products.map((item) => {
        const { id, image, name, oldPrice, newPrice } = item;

        return (
          <main className="mockup" key={id}>
            <img src={image} alt={name} className="sold-img" />
            <div className="info">
              <h3>{name}</h3>
              <div className="price-container">
                <p>${oldPrice}</p>
                <p className="new-price">${newPrice}</p>
              </div>
            </div>
            <div className="view-product">
              <BiChevronRight className="icon" />
            </div>
          </main>
        );
      })}
    </article>
  );
};

export default SoldProduct;
