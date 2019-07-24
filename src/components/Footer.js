import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutUs from "./About-us";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Link to="/About-us">About US</Link>
          <Route exact path="/About-us" component={AboutUs} />
        </BrowserRouter>
      </Fragment>
    );
  }
}
