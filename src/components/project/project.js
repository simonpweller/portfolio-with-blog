import React from 'react';
import PropTypes from 'prop-types';
import './project.module.css';

const Project = ({
  image, name, brief, onCodepen, url, github, background,
}) => (
  <div styleName="project" style={background ? { backgroundColor: background } : null}>
    <img src={image} alt={name} />
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  onCodepen: PropTypes.bool,
  url: PropTypes.string.isRequired,
  github: PropTypes.string,
  background: PropTypes.string,
};

Project.defaultProps = {
  onCodepen: false,
  github: null,
  background: '',
};
