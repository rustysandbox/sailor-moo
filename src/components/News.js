import React from 'react';

export default class News extends React.Component {
  constructor(props){
    super(props);
    this.state={
      news: [{
        "name": "First{{i}} Last{{i}}",
        "email": "first{{i}}@mail.com",
        "imageUrl": "https://unsplash.it/50?image={{i}}"
      },
      {
        "name": "First{{i}} Last{{i}}",
        "email": "first{{i}}@mail.com",
        "imageUrl": "https://unsplash.it/50?image={{i}}"
      }
    ]
    }
  }
  render () {
    console.log(this.state.news);
    let newsData;
    this.newsData = this.state.news.map((item, key) => <li key={item.name} > {item.imageUrl}</li>)

    
    return (
      <div>
          
          <ul>{newsData}</ul>
      </div>
    
    );
  }
}