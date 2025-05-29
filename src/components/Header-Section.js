import React from 'react';
import logo from '../assets/footer-logo-1.png.jpg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="SUDO Logo" />
      <button className="sign-in">Sign In</button>
    </header>
  );
}

export default Header;