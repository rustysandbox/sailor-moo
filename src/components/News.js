import React, { Fragment, useState, useEffect } from "react";
import Box from "./Box";
import Vote from "./Vote";
import Nav from "./Nav";
import { Link } from 'react-router-dom';


function News() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://warm-cove-20229.herokuapp.com/news");

    const items = await data.json();
    setItem(items);
  };

  return (
    <Fragment>
      <Nav />
      <section className="news">
        <ul>
          {item.map((el, key) => (
            <li key={key}>
              <Vote />
              <img className="thumbnail" src={item[key].thumbnailurl}></img>
              <h4>{item[key].title}</h4> <Box redditID={item[key].id} />
              
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
}

export default News;
