import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import tiles from "./tiles.json";

class App extends React.Component {

  state = {
    tiles: tiles,
    score: 0,
    topScore: 0,
    chosen: [],
    correct: null,
    win: false
  }

  handleClick = (id) => {
    
    if (!this.state.chosen.includes(id)) {

      let nowChosen = this.state.chosen;
      let shuffleTiles = this.state.tiles.sort(() => 0.5 - Math.random());
      let score = this.state.score + 1;
      nowChosen.push(id);

      this.setState({
        tiles: shuffleTiles,
        score: score,
        chosen: nowChosen,
        correct: true
      }, () => {
        this.checkScore();
      });
    }
    else {

      let nowChosen = [];
      let score = 0;
      let topScore;
      
      if (this.state.score > this.state.topScore) {
        topScore = this.state.score;
      }
      else {
        topScore = this.state.topScore;
      }
      
      this.setState({
        tiles: tiles,
        score: score,
        topScore: topScore,
        chosen: nowChosen,
        correct: false
      });
    }
  }

  checkScore = () => {
    if (this.state.score === 12) {
      this.setState({win: true, chosen: [], score: 0, topScore: this.state.score});
    }
    else {
      this.setState({win: false});
    }
  }

  render() {

    let tileSet = this.state.tiles.map((tile) => <GameBoard key={tile.id} {...tile} handleClick={this.handleClick} />)

    return (
      <div style={{background: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/debut_light.png")'}}>
        <Navbar correct={this.state.correct} score={this.state.score} topScore={this.state.topScore} gameStatus={this.state.win}/>
        <Header />
        <div className="container">
          <ul className="tileSet text-center">
            {tileSet}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;