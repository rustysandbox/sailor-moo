import React, { Component, Fragment, useState, useEffect } from "react";


class DisplayComments extends Component {
  constructor(props) {
    super(props);
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000));
  }
  render() {
    console.log("display ", this.props);
    return (
      <Fragment>
        <ul>
          <img src={`https://api.adorable.io/avatars/90/${this.getRandomInt()}.png`}/>
          <li>{this.props.comment}</li>
        </ul>
      </Fragment>
    );
  }
}

export default DisplayComments;
