import React, { Component, Fragment } from "react";

class DisplayComments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("display ", this.props);
    return (
      <Fragment>
        <ul>
          <li>{this.props.comment}</li>
        </ul>
      </Fragment>
    );
  }
}

export default DisplayComments;
