import React, { Component, Fragment } from "react";
import superagent from "superagent";

class DisplayComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }

  getComments = () => {
    console.log(this);
    superagent
      .get(
        `https://warm-cove-20229.herokuapp.com/comments?id=${
          this.props.redditID
        }`
      )
      .then(res => {
        this.setState({ comment: res.body });
      });
  };

  createComment = inputComment => {
    let comment = [];
    inputComment.forEach((el, idx) => {
      comment.push(
        <li key={idx}>
          <img
            src={`https://api.adorable.io/avatars/90/${el.user_id}.png`}
            alt="auto generated avatar"
          />
          <p>{el.comment}</p>
        </li>
      );
    });
    return comment;
  };

  render() {
    if (this.state.comment === null) {
      this.getComments();
      return (
        <Fragment>
          <p>Loading</p>
        </Fragment>
      );
    }

    if (this.state.comment.length === 0) {
      return (
        <Fragment>
          <p>No comment!</p>
        </Fragment>
      );
    }

    let foo = this.createComment(this.state.comment);
    return (
      <Fragment>
        <ul>
          {foo}
          {/* <img src={`https://api.adorable.io/avatars/90/${this.props.}.png`}/>
          <li>{this.state.comment && this.state.comment.map((el)=> el.comment)}</li> */}
        </ul>
      </Fragment>
    );
  }
}

export default DisplayComments;
