import React, { Component, Fragment, useState, useEffect } from "react";
import Box from "./Box";
import { async } from "q";

export default class article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [
        // {
        //   id: '',
        //   reddit_gen_id: '',
        //   url: '',
        //   title: '',
        //   source: '',
        //   thumbnailurl: '',
        //   created: '',
        //   stars: ''
        // }

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
    // const articleData = async() => {
    //   const data = await fetch('')
    // }
    console.log("article " + this.state.article);
    let articleData = this.state.article.map((item, key) => (
      <li key={key}>
        {item.imageUrl} <Box />
      </li>
    ));

    return (
      <Fragment>
        <ul>{articleData}</ul>
      </Fragment>
    );
  }
}
