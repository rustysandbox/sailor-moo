import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Box />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
