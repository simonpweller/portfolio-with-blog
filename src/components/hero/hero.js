import React from 'react';
import Img from 'gatsby-image';
import './hero.module.css';

const Hero = ({ image }) => (
  <section styleName="hero">
    <Img
      style={{ width: '100vw', height: '100vh' }}
      imgStyle={{ opacity: '0.8' }}
      sizes={image.sizes}
    />
    <div styleName="hero-content">
      <div className="wrapper">
        <h1>Simon Weller</h1>
        <h2>Web-Developer and lifelong learner</h2>
      </div>
    </div>
  </section>
);

export default Hero;
