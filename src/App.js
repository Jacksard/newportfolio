import React, { Component } from 'react';
import './App.css';

import Icons from './Components/Icons/Icons';
import UnderIcons from './Components/UnderIcons/UnderIcons';
import Projects from './Components/Projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='background'>
          <header className='App-header'>
            <div className='icons'>
              <a href='https://github.com/Jacksard'>
                <i class='fab fa-git-square fa-3x'></i>
              </a>
              <a href='https://www.linkedin.com/in/jacob-goskha/'>
                <i class='fab fa-linkedin fa-3x'></i>
              </a>
            </div>
            <p className='myName'>Jacob Goskha</p>
            <p className='title'>JavaScript Full Stack Developer</p>
            <p className='location'>
              <i class='fas fa-map-marker-alt'></i>Toronto
            </p>
            <div className='underLine'></div>
          </header>

          <Icons />
          <UnderIcons />
          <svg class='arrows'>
            <path class='a1' d='M0 0 L20 22 L40 0'></path>
          </svg>
          <div className='projectsSection' data-aos='fade-down'>
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
