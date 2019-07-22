import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import News from './News';

class App extends React.Component {
  render() {
    return (
     <React.Fragment>
       <Header />
       <News />
       <Footer />
     </React.Fragment> 
    );
  }
}

export default App;
