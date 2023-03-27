import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className='HeaderContent'>
          <a href='/'>
            <img src='./logo.png' width='200px'/>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;