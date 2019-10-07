import React, { Component } from 'react';
import './App.css';

import Projects from './Components/Projects/Projects';

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
            <p className='title'>JavaScript Full Stack Developer</p>
            <div className='underLine'></div>
            <div className='projects'>
              <Projects />
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
