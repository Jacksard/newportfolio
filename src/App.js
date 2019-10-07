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
              <i class='fab fa-git-square fa-3x'></i>
              <i class='fab fa-linkedin fa-3x'></i>
            </div>
            <p className='myName'>Jacob Goskha</p>
            <p className='location'>
              <i class='fas fa-map-marker-alt'></i>Toronto
            </p>
            <p className='title'>JavaScript - Full Stack Developer</p>
            <div className='underLine'></div>
          </header>

          <Icons />
          <div className='projectsSection'>
            <Projects data-aos='zoom-in-left' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
