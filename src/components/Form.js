import React, { Component, Fragment } from "react";
import DisplayComments from "./DisplayComments";
import superagent from "superagent";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      componentComment: ""
    };
  }

  changeComment = e => {
    let comment = e.target.value;
    this.setState({
      comment
    });
  };

  saveComment = e => {
    this.props.updateBoxState({
      comment: "",
      componentComment: this.state.comment
    });
    e.preventDefault();
    superagent
      .post(
        `https://warm-cove-20229.herokuapp.com/comments?id=${
          this.props.redditID
        }&message=${this.state.comment}`
      )
      .then(res => console.log(res)) 
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.saveComment}>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.changeComment}
            placeholder="Type Comment Here"
          />
          <button type="submit" onClick={this.saveComment}>
            Submit
          </button>
        </form>
        <DisplayComments comment={this.props.componentComment} />
      </Fragment>
    );
  }
}

export default Form;
