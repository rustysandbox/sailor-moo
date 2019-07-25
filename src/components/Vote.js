import React, { Component, Fragment } from "react";
import thumbsUp from '../assets/thumbsUp.png';
import superagent from 'superagent';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumberOfVote: null,
      patchFlag: false
    };
  }

  increaseVote = () => {
    if (this.state.patchFlag){
      this.setState({patchFlag: false})
      return;
    }
    superagent.patch(`https://warm-cove-20229.herokuapp.com/stars?id=${this.props.redditID}`).then(res => {
      this.setState({ currentNumberOfVote: res.text, patchFlag: true });
    })
  };
  getVote = () =>{
    superagent.get(`https://warm-cove-20229.herokuapp.com/stars?id=${this.props.redditID}`).then(res =>{
    this.setState({currentNumberOfVote: res.text})
    }).catch(e=>console.error(e));
  }
  render() {
  
    if(this.state.currentNumberOfVote === null) {
      this.getVote();
      return (
        <Fragment>
          <p>loading</p>
        </Fragment>
      );
    
    } 
    return (
      <Fragment>
      
        <section className="vote">
          <h3>{this.state.currentNumberOfVote}</h3>
          <img src={thumbsUp} onClick={()=>{this.increaseVote()}} />
        </section>
      </Fragment>
    );
  }
}

export default Vote;
