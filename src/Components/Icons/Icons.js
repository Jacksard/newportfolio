import React from 'react';
import './Icons.css';

// Import logos
import Mongo from '../../img/mongo.png';
import ExpressLogo from '../../img/express.svg';
import ReactLogo from '../../img/react.svg';
import Node from '../../img/node.png';

import AOS from 'aos';
AOS.init();

const Icons = () => {
  return (
    <div className='logoSection'>
      <img
        src={Mongo}
        className='mongo_logo'
        data-aos='zoom-in-left'
        data-aos-delay='100'
      ></img>
      <img
        src={ExpressLogo}
        className='express_logo'
        data-aos='zoom-in-left'
        data-aos-delay='200'
      ></img>
      <img
        src={ReactLogo}
        className='react_logo'
        data-aos='zoom-in-left'
        data-aos-delay='300'
      ></img>
      <img
        src={Node}
        className='node_logo'
        data-aos='zoom-in-left'
        data-aos-delay='400'
      ></img>
    </div>
  );
};

export default Icons;
