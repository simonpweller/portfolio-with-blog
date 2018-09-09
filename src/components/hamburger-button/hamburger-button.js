import React from 'react';
import PropTypes from 'prop-types';
import './hamburger-button.module.css';

const HamburgerButton = ({ open, toggle }) => (
  <button onClick={toggle} styleName={`hamburger hamburger--slider${open ? ' is-active' : ''}`} type="button">
    <span styleName="hamburger-box">
      <span styleName="hamburger-inner" />
    </span>
  </button>
);

HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default HamburgerButton;
