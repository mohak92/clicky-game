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
    clicked: [],
    gameMsg: 'Click on an image to begin!',
    games
  };

  handleClicked = (id) => {
    if (!this.state.clicked.includes(id)) {
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
      const updatedScore = this.state.currentScore + 1
      // increment score
      this.setState({
        currentScore: updatedScore,
        gameMsg: 'You guessed correctly!'
      })
      // update topscore
      if (updatedScore >= this.state.topScore) {
        this.setState({ topScore: updatedScore })
      }
      if (updatedScore === 12) {
        this.setState({ 
        games,
        gameMsg: 'You win!',
        currentScore: 0,
        clicked: [] })
        }
      this.setState({
        games: this.state.games.sort(function (a, b) { return 0.5 - Math.random() })
      });
    } else {
      // if id is found, reset game
      this.setState({
        games,
        gameMsg: 'You guess incorrectly! Try Again',
        currentScore: 0,
        clicked: []
      })
      this.setState({ ganes: this.state.games.sort(function (a, b) { return 0.5 - Math.random() }) })
    }
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