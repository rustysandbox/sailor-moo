import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./News";
import About from "./About";
import Nav from "./Nav";

function Home() {
  return (
    <Fragment>
      <section className="hero">
        <div className="inner">
          <h1>Sacred Toast</h1>
          <h2>Anime News Aggregator</h2>
          <Nav />
        </div>
      </section>
    </Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" exact component={News} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
