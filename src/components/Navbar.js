import React from 'react';

const Navbar = () => {
  return (
    <div className="border-line">
      <nav className="navbar">
        <div className="navbar-center">
          <img src="/photos/logo.png" alt="" />
        </div>
        <div className="navbar-list">
          <h1 className="navbar-title">explore</h1>
          <h4 className="active-link">new in</h4>
          <h4>clothing</h4>
          <h4>shoes</h4>
          <h4>accessoires</h4>
          <h4>activeWear</h4>
          <h4>outlet</h4>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
