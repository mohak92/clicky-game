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

  imageClicked = (id) => {

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
        {games.map(city => (
            <Images
              key={city.id}
              id={city.id}
              name={city.name}
              image={city.image}
              imageClicked={this.imageClicked}
            />
          ))}
         </Container>
        <Footer />
      </div>
    );
  }
}

export default App;