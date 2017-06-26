import React from 'react';
import PropTypes from 'prop-types';

// BUG???? FOR SOME REASON REACT TESTUTILS RETURNS NULL! WHEN RENDERING PURE FUNC COMPS
// const _Title = ({text}) => (<h1>{text}</h1>);

class Title extends React.Component {

  constructor() {
    super();
    this.state = {clickCount: 0};
    this.whenTitleClicked = this.whenTitleClicked.bind(this);
  }

  whenTitleClicked() {
    this.setState({clickCount: this.state.clickCount + 1});
  }

  render() {
    return (
      <div>
        <h1 onClick={this.whenTitleClicked}>{this.props.text}</h1>
        {this.state.clickCount ? <div className="subtitle">{this.state.clickCount}</div> : null}
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
