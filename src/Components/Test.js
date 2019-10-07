import React from 'react';
import PropTypes from 'prop-types';

const Test = props => {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
};

Test.propTypes = {
  str: PropTypes.string
};

export default Test;
