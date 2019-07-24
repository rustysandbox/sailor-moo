import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import Vote from "./Vote";

function News() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    console.log("this", this);

    const data = await fetch("https://warm-cove-20229.herokuapp.com/news");

    const items = await data.json();
    setItem(items);
  };

  return (
    <Fragment>
      <ul>
        {item.map((el, key) => (
          <li key={key}>
            <Vote />
            {item[key].title} <Box />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default News;
// export default class article extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: [
//         {
//           name: "First{{i}} Last{{i}}",
//           email: "first{{i}}@mail.com",
//           imageUrl: "https://unsplash.it/50?image={{i}}"
//         },
//         {
//           name: "First{{i}} Last{{i}}",
//           email: "first{{i}}@mail.com",
//           imageUrl: "https://unsplash.it/50?image={{i}}"
//         },
//         {
//           name: "First{{i}} Last{{i}}",
//           email: "first{{i}}@mail.com",
//           imageUrl: "https://unsplash.it/50?image={{i}}"
//         }
//       ]
//     };
//   }
//   render() {
//     console.log("article " + this.state.article);
//     let articleData = this.state.article.map((item, key) => (
//       <li key={key}>
//         <Vote />
//         {item.imageUrl} <Box />
//       </li>
//     ));

//     return (
//       <Fragment>
//         <ul>{articleData}</ul>
//       </Fragment>
//     );
//   }
// }
