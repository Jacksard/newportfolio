import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = props => {
  return (
    <div className='projectsSection'>
      <h2>Projects</h2>
    </div>
  );
};

Projects.propTypes = {
  str: PropTypes.string
};

export default Projects;
