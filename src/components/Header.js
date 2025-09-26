// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Portal de Notícias</h1>
      <nav>
        <a href="#noticias">Últimas Notícias</a>
      </nav>
    </header>
  );
}

export default Header;
