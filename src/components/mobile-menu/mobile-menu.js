import React, { Component } from 'react';
import HamburgerButton from '../hamburger-button/hamburger-button';

export default class MobileMenu extends Component {
  state = {
    open: false,
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <HamburgerButton
          open={open}
          toggle={() => this.setState(prevState => ({ open: !prevState.open }))}
        />
      </div>
    );
  }
}
