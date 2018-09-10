import React, { Component } from 'react';
import HamburgerButton from '../hamburger-button/hamburger-button';
import './topnav.module.css';

export default class TopNav extends Component {
  state = {
    open: false,
  }

  render() {
    const { open } = this.state;
    return (
      <nav styleName={`topnav${open ? ' is-open' : ''}`}>
        <ul styleName="links">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <HamburgerButton
          open={open}
          toggle={() => this.setState(prevState => ({ open: !prevState.open }))}
        />
      </nav>
    );
  }
}
