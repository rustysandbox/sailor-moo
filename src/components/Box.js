import React, { Component, Fragment } from "react";
import News from "./News";
import DisplayComments from "./DisplayComments";
import Form from "./Form";

class Box extends Component {
  render() {
    return (
      <Fragment>
        <News />
        <DisplayComments />
        <Form />
      </Fragment>
    );
  }
}

export default Box;
