import React from "react";
import "./Navbar.css";


const Navbar = () => (
  <header className="navbar-container">
    <div className="navbar-logo">
      <img src="/images/logo_new.png" alt="Gourmet Ceylon Cinnamon" />
    </div>
    {/* <div className="navbar-search">
      <input type="text" placeholder="Search ..." />
      <button aria-label="search" className="search-btn">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7" stroke="#4e2e0e" strokeWidth="2" />
          <line x1="15.2" y1="15.2" x2="20" y2="20" stroke="#4e2e0e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div> */}
    <nav className="nav-links">
      <a href="/home">Home</a>
      <a href="/shop">Shop</a>
      <a href="/aboutUs">About Us</a>
      <a href="/factoryTour">Factory Tours</a>
      <a href="/contactUs">Contact</a>
    </nav>
  </header>
);

export default Navbar;
