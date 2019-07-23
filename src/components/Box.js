import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import News from "./News";
import DisplayComments from "./DisplayComments";
import Form from "./Form";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateState = dataObj => {
    this.setState(dataObj);
  };

  render() {
    return (
      <Fragment>
        <News />

        <BrowserRouter>
          <Link to="/displaycomment">Click to See comments</Link>
          <Route
            exact
            path="/displaycomment"
            component={() => (
              <DisplayComments comment={this.state.componentComment} />
            )}
          />

          <Link to="/addcomment">Add a Comment</Link>
          <Route
            exact
            path="/addcomment"
            component={() => (
              <Form
                updateBoxState={this.updateState}
                componentComment={this.state.componentComment}
              />
            )}
          />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Box;
