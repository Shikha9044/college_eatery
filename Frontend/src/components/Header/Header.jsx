import React from 'react';
import './Header.css';
import { assets } from "../../assets/assets";


const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your favourite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with the </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
