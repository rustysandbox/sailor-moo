import React, { Component, Fragment} from 'react';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentNumberOfVote: "0" 
    }
  }

  increaseVote = () => {
    let valueToModify = this.state.currentNumberOfVote;
    let modifiedValue = parseInt(valueToModify, 10) + 1;
    this.setState({currentNumberOfVote: modifiedValue});
  }

  decreaseVote = () => {
    let valueToModify = this.state.currentNumberOfVote;
    let modifiedValue = parseInt(valueToModify, 10) - 1;
    this.setState({currentNumberOfVote: modifiedValue});
  }
  render() { 
    return ( 
      <Fragment>
        <section> 
          <h3>{this.state.currentNumberOfVote}</h3>

          <button onClick={this.increaseVote}>Like</button>
          <button onClick={this.decreaseVote}>Dislike</button>
        </section>
      </Fragment>
     );
  }
}
 
export default Vote;