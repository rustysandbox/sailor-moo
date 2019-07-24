import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <h2>Sacred Toast Nav Bar</h2>
          <ul>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/News">
              <li>News</li>
            </Link>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Nav;
