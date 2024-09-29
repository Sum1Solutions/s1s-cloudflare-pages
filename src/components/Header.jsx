import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', alignItems: 'center' }}>
      <h1>My Website</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <a href="https://www.youtube.com/@sum1namedjon" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>About</a>
        <LoginButton />
      </nav>
    </header>
  );
}

export default Header;
