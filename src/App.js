import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import Wishlist from './components/Wishlist';

const sampleWishlistItems = [
  {
    name: "Мобільний телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)",
    price: "64 999 ₴",
    addedDate: "17.07.2024",
    status: "Статус",
    image: "path_to_image"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
      case 'register':
      case 'login-form':
        return <LoginForm />;
      case 'wishlist':
        return <Wishlist setCurrentPage={setCurrentPage}/>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;