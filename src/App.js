import React, { Component } from 'react';
import './App.css';

import Icons from './Components/Icons/Icons';
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
            <p className='location'>
              <i class='fas fa-map-marker-alt'></i>Toronto
            </p>
            <p className='title'>JavaScript Full Stack Developer</p>
            <div className='underLine'></div>
          </header>

          <Icons />
          <div className='animationSection'></div>
          <div className='projectsSection' data-aos='fade-down'>
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
