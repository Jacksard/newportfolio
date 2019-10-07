import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import tenor from '../../gif/tenor.gif';
import appDemo from '../../img/pubgAppDemo.PNG';

const Projects = props => {
  return (
    <div className='projectsSection'>
      <h2>PROJECTS</h2>
      <div className='pubgStatsProject' data-aos='fade-left'>
        <div className='layerOnProjectPubg'></div>
        <p className='projectTitle'>PUBG stats application</p>

        <p className='projectLiveDemoLink'>
          <a href='https://pubg-stats-app.netlify.com'>Live demo</a>
        </p>
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
