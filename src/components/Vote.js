import React, { Component, Fragment } from "react";
import thumbsUp from '../assets/thumbsUp.png';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumberOfVote: "0"
    };
  }

  increaseVote = () => {
    let valueToModify = this.state.currentNumberOfVote;
    let modifiedValue = parseInt(valueToModify, 10) + 1;
    this.setState({ currentNumberOfVote: modifiedValue });
  };
  render() {
    return (
      <Fragment>
        <section className="vote">
          <h3>{this.state.currentNumberOfVote}</h3>
          <img src={thumbsUp} onClick={this.increaseVote} />
        </section>
      </Fragment>
    );
  }
}

export default Vote;
