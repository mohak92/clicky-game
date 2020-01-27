import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import games from "./games.json";
import Container from './components/Container/Container';


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameMsg: "Click on an image to begin!",
    games
  };

  handleClicked = (id) => {

  }

  render() {
    return (
      <div className="App">
        <Navbar
          msg={this.state.gameMsg}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header />
        <Container>
        {games.map(game => (
            <Images
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              handleClicked={this.handleClicked}
            />
          ))}
         </Container>
        <Footer />
      </div>
    );
  }
}

export default App;