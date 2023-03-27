import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className='NavBarContent'>
          <li className='NavBarItem'>
            <a href='/' className='NavBarLink'>Home</a>
          </li>
          <li className='NavBarItem'>
            <a href='/' className='NavBarLink'>Sobre o E-book</a>
          </li>
        </ul>
        <button className='NavBarButton'>Adquira agora</button>
      </nav>
    </>
  );
}

export default NavBar;