import React from 'react';
import TopNav from './topnav/topnav';

const Header = () => (
  <TopNav>
    <li>
      <a href="/#about">About</a>
    </li>
    <li>
      <a href="/#portfolio">Portfolio</a>
    </li>
    <li>
      <a href="/#contact">Contact</a>
    </li>
  </TopNav>
);

export default Header;
