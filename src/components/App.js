import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <News />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
