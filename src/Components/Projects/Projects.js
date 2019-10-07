import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = props => {
  return (
    <div className='projectsSection'>
      <h2>PROJECTS</h2>

      <div className='pubgStatsProject' data-aos='fade-left'>
        PUBG stats application
      </div>
      <div className='pubgStatsProject' data-aos='fade-right'>
        App #2
      </div>
      <div className='pubgStatsProject' data-aos='fade-left'>
        App #3
      </div>
    </div>
  );
};

Projects.propTypes = {
  str: PropTypes.string
};

export default Projects;
