import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";


const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
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
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/aboutUs">About Us</a>
        <a href="/factoryTour">Factory Tours</a>
        <a href="/contactUs">Contact</a>
      </nav>
      
      {/* Profile/Auth Section */}
      <div className="navbar-auth">
        {isAuthenticated ? (
          <div className="profile-dropdown" ref={dropdownRef}>
            <button 
              className="profile-btn" 
              onClick={handleProfileClick}
              aria-label="User Profile"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="3" stroke="#4e2e0e" strokeWidth="2"/>
                <path d="M12 14c-3.866 0-7 1.79-7 4v2h14v-2c0-2.21-3.134-4-7-4z" stroke="#4e2e0e" strokeWidth="2"/>
              </svg>
              <span className="profile-name">{user?.firstName || user?.name || 'User'}</span>
              <svg className={`dropdown-arrow ${showDropdown ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l-3-3h6l-3 3z" fill="#4e2e0e"/>
              </svg>
            </button>
            
            {showDropdown && (
              <div className="profile-dropdown-menu">
                <a href="/profile" className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 14c-3.866 0-7 1.79-7 4v2h14v-2c0-2.21-3.134-4-7-4z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  My Profile
                </a>
                <a href="/orders" className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 11V5a3 3 0 0 1 6 0v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  My Orders
                </a>
                <a href="/cart" className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Shopping Cart
                </a>
                {user?.role === 'owner' && (
                  <a href="/admin/dashboard" className="dropdown-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Admin Dashboard
                  </a>
                )}
                <hr className="dropdown-divider" />
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2"/>
                    <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <a href="/login" className="login-btn">Login</a>
            <a href="/register" className="register-btn">Sign Up</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
