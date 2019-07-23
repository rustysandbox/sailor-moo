import React, { Component, Fragment } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Box />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
