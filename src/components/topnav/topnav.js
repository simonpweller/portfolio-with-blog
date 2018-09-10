import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HamburgerButton from '../hamburger-button/hamburger-button';
import './topnav.module.css';

export default class TopNav extends Component {
  state = {
    open: false,
  }

  render() {
    const { open } = this.state;
    const { children } = this.props;
    return (
      <nav styleName={`topnav${open ? ' is-open' : ''}`}>
        <ul styleName="links">
          {children}
        </ul>
        <HamburgerButton
          open={open}
          toggle={() => this.setState(prevState => ({ open: !prevState.open }))}
        />
      </nav>
    );
  }
}

TopNav.propTypes = {
  children: PropTypes.node.isRequired,
};
