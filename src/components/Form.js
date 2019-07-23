import React, { Component, Fragment } from "react";
import DisplayComments from "./DisplayComments";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: []
    };
  }

  submitComment = e => {
    let comment = e.target.value;
    this.setState({
      comment
    });
  };

  saveComment = e => {
    console.log("saved comment: " + this.state.comment);
    this.setState({ comment: "" });
    e.preventDefault();
  };

  render() {
    const comments = this.state.comment;
    return (
      <Fragment>
        <form onSubmit={this.saveComment}>
          <label>Type Comment Here</label>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.submitComment}
          />
          <button type="submit" onClick={this.saveComment}>
            Submit
          </button>
        </form>
        <DisplayComments comments={comments} />
      </Fragment>
    );
  }
}

export default Form;
