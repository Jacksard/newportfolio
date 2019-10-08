import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = props => {
  return (
    <div className='projectsSection'>
      <h2>PROJECTS</h2>
      <div className='pubgStatsProject' data-aos='fade-left'>
        <div className='layerOnProjectPubg'></div>
        <p className='projectTitle'>PUBG stats application</p>

        <p className='projectLink'>
          A full stack app for comparison between players stats, based on{' '}
          <a href='https://developer.pubg.com/'>PUBG's Developer API</a>{' '}
        </p>
        <p>Technologies: </p>
        <p>Frond-End: ReactJS and Axios</p>
        <p className='projectLink'>
          <a
            href='https://pubg-stats-app.netlify.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live demo
          </a>{' '}
          /
          <a
            href='https://github.com/Jacksard/pubg-stats-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            github Repo
          </a>
        </p>
        <p>Back-End: NodeJS/Express/MongoDB with server side caching</p>
        <p className='projectLink'>
          <a
            href='https://github.com/Jacksard/pubg-stats-server'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            github Repo
          </a>
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
