import React, { Component, Fragment } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "Hello World"
    };
  }

  submitComment(e) {
    e.preventDefault();
    console.log(this.state.comment);
    const comment = e.target.value;
    this.setState({ comment });
  }

  render() {
    return (
      <Fragment>
        <form>
          <label>Type Comment Here</label>
          <input type="text" placeholder="Type Comments Here" />
          <button type="submit" onClick={this.submitComment}>
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Form;
