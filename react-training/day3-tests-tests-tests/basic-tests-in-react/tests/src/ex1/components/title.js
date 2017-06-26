import React from 'react';
import PropTypes from 'prop-types';

// BUG???? FOR SOME REASON REACT TESTUTILS RETURNS NULL! WHEN RENDERING PURE FUNC COMPS
// const _Title = ({text}) => (<h1>{text}</h1>);

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
