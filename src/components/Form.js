import React, { Component, Fragment } from "react";
import DisplayComments from "./DisplayComments";

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
            onChange={this.changeComment}
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
