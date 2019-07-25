import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import don from "../assets/don.png";
import leo from "../assets/leo.png";
import mike from "../assets/mike.png";
import ralph from "../assets/ralph.png";

class About extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="about">
          <ul>
            <li>
              <a href="https://github.com/sapanapoudel">
                <img src={don} />
              </a>
              <p>Sapana</p>
            </li>
            <li>
              <a href="https://github.com/JBusch2010">
                <img src={leo} />
              </a>
              <p>Joachen</p>
            </li>
            <li>
              <a href="https://github.com/Stevengrant">
                <img src={mike} />
              </a>
              <p>Steve</p>
            </li>
            <li>
              <a href="https://github.com/bomibear">
                <img src={ralph} />
              </a>
              <p>BomiBear</p>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default About;
