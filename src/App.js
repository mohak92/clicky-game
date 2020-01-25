import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameMsg: "Click on a image to begin!"
  };

  render() {
    return (
      <div className="App" style={{height:"1500px",}}>
        <Navbar
          msg={this.state.gameMsg}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;