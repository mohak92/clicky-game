import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameMsg: "Click on a image to begin!"
  };

  render() {
    return (
      <div className="App">
        <Navbar
          msg={this.state.gameMsg}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
      </div>
    );
  }
}

export default App;