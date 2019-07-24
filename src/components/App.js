import React, { Component, Fragment } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";
import News from "./News";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <News />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
