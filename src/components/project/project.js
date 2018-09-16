import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import gatsbyImage from '../../propTypes/gatsby-image';

const Project = ({ image, name }) => (
  <div className="project">
    <Img sizes={image.sizes} />
    <div className="label">
      <span className="name">{name}</span>
    </div>
  </div>
);

export default Project;

Project.propTypes = {
  image: gatsbyImage.isRequired,
  name: PropTypes.string.isRequired,
};
