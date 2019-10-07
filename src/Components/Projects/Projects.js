import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import tenor from '../../gif/tenor.gif';

const Projects = props => {
  return (
    <div className='projectsSection'>
      <h2>PROJECTS</h2>
      <div className='pubgStatsProject' data-aos='fade-left'>
        <div className='layerOnProjectPubg'>layer</div>
        <p className='projectTitle'>PUBG stats application</p>

        <p>Front end live demo: Back end server Node JS</p>
      </div>
      <div className='app2' data-aos='fade-right'>
        App #2
      </div>
      <div className='app3' data-aos='fade-left'>
        App #3
      </div>
    </div>
  );
};

Projects.propTypes = {
  str: PropTypes.string
};

export default Projects;
