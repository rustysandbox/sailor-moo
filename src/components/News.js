import React, { Component, Fragment } from "react";
import Box from "./Box";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          name: "First{{i}} Last{{i}}",
          email: "first{{i}}@mail.com",
          imageUrl: "https://unsplash.it/50?image={{i}}"
        },
        {
          name: "First{{i}} Last{{i}}",
          email: "first{{i}}@mail.com",
          imageUrl: "https://unsplash.it/50?image={{i}}"
        },
        {
          name: "First{{i}} Last{{i}}",
          email: "first{{i}}@mail.com",
          imageUrl: "https://unsplash.it/50?image={{i}}"
        }
      ]
    };
  }
  render() {
    console.log("news " + this.state.news);
    let newsData = this.state.news.map((item, key) => (
      <li key={key}>
        {item.imageUrl} <Box />
      </li>
    ));

    return (
      <Fragment>
        <ul>{newsData}</ul>
      </Fragment>
    );
  }
}
