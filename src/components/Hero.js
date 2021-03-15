import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="switch-gender-container">
        <button type="button" className="active-btn">
          women
        </button>
        <button type="button" className="btn">
          men
        </button>
      </div>
      <form className="search-products">
        <input
          type="text"
          className="input-field"
          placeholder="Search for items, brands, and the latest products..."
        />
      </form>
    </section>
  );
};

export default Hero;
