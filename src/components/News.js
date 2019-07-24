import React, { Component, Fragment, useState, useEffect } from "react";
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
            {item[key].title} <Box redditID={item[key].id} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default News;
