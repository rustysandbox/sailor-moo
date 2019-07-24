import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./News";
import About from "./About";
import Nav from "./Nav";
import "./scss/core.scss";

function Home() {
  return <h1>Sacred Toast Home Page</h1>;
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
