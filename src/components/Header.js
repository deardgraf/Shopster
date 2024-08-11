import React, { useState } from 'react';
import '../styles/Header.css';
import frame from '../images/Frame.svg';
import arrowImage from '../images/Wishlist.svg';
import btnCart from '../images/Vector2.svg';
import btnWishlist from '../images/Vector.svg';

function Header({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [cartPrice, setCartPrice] = useState(0.00);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <img src={frame} alt="Logo" />
        </div>
        <button className="catalog-button">
          <span className="catalog-image" />
        </button>
        <input type="text" id="search" name="search" placeholder="Я шукаю..." className="search-input" />
      </div>
      <div className="header2-container">
        <div className="menu-strip">
          <div className="account-menu">
            <button className="account-button" onClick={() => setMenuOpen(!menuOpen)}>
              Обліковий запис
              <img src={arrowImage} alt="arrow" className={`arrow ${menuOpen ? 'open' : ''}`} />
            </button>
            {menuOpen && (
              <div className="account-options">
                <a onClick={() => setCurrentPage('login')}>Увійти</a>
                <a onClick={() => setCurrentPage('register')}>Реєстрація</a>
              </div>
            )}
          </div>
          <div className="welcome-message">
            <span>Привіт,</span>
            <a onClick={() => setCurrentPage('login')} className="login-link">Увійти тут</a>
          </div>
        </div>
        <button className="wishlist-button">
          <img src={btnWishlist} alt="Wishlist" className="icon-image" />
        </button>
        <div className="cart-section">
          <button className="cart-button">
            <img src={btnCart} alt="Cart" className="icon-image" />
          </button>
          <div className="cart-info">
            <span className="cart-items">{cartItems} предметів</span>
            <span className="cart-price">{cartPrice} ₴</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
