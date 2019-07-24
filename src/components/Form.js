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
        `https://warm-cove-20229.herokuapp.com/comment?id=${
          this.props.redditID
        }&message=${this.state.comment}`
      )
      .then(res => console.log(res)) //TODO: Draw Updated Comments
      .catch(error => console.error(error));
    // request.post('/user')
    // .set('Content-Type', 'application/json')
    // .send('{"name":"tj","pet":"tobi"}')
    // .then(callback)
    // .catch(errorCallback)
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
