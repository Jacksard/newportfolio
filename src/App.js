import React, { Component } from 'react';
import './App.css';

import Test from './Components/Test';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='background'>
          <header className='App-header'>
            <p className='myName'>Jacob Goskha</p>
            <p className='title'>JavaScript Full Stack Developer</p>
            <div className='underLine'></div>
            <Test str={1}>TESTTEST </Test>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
