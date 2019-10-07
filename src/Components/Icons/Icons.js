import React from 'react';
import './Icons.css';

// Import logos
import Mongo from '../../img/mongo.png';
import ExpressLogo from '../../img/express.svg';
import ReactLogo from '../../img/react.svg';
import Node from '../../img/node.png';

const Icons = () => {
  return (
    <div>
      <img src={Mongo} className='mongo_logo'></img>
      <img src={ExpressLogo} className='express_logo'></img>
      <img src={ReactLogo} className='react_logo'></img>
      <img src={Node} className='node_logo'></img>
    </div>
  );
};

export default Icons;
