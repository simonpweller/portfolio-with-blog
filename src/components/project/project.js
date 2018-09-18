import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './project.module.css';

const Project = ({
  image, name, brief, onCodepen, url, github,
}) => (
  <div styleName="project">
    <Img
      resolutions={image.resolutions}
      style={{
        width: '100%', height: '100%', display: 'flex', justifyContent: 'center',
      }}
      imgStyle={{ width: 'auto', left: 'unset' }}
    />
    <div styleName="label">
      <div styleName="name">{name}</div>
      <div>
        <a href={brief} target="_blank" rel="noopener noreferrer">Brief</a>
        &nbsp;on freeCodeCamp
      </div>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">{onCodepen ? 'Full code' : 'Live demo'}</a>
        {onCodepen ? ' on CodePen' : null}
      </div>
      {github
        ? (
          <div>
            <a href={github} target="_blank" rel="noopener noreferrer">Full code</a>
             &nbsp;on Github
          </div>
        ) : null
      }
    </div>
  </div>
);

export default Project;

Project.propTypes = {
  image: gatsbyImage.isRequired,
  name: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  onCodepen: PropTypes.bool,
  url: PropTypes.string.isRequired,
  github: PropTypes.string,
};

Project.defaultProps = {
  onCodepen: false,
  github: null,
};
