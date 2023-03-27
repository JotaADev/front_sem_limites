import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className='HeaderContent'>
          <a href='/' className='HeaderLogo'>
            <img src='./logo.png' width='200px'/>
          </a>
          <NavBar/>
        </div>
      </header>
    </>
  );
}

export default Header;