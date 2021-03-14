import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-center">
          <img src="/photos/logo.png" alt="" />
        </div>
        <div className="switch-gender-container">
          <h1>explore</h1>
          <h4>new in</h4>
          <h4>clothing</h4>
          <h4>shoes</h4>
          <h4>accessoires</h4>
          <h4>activeWear</h4>
          <h4>outlet</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
