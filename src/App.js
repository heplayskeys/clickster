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
    win: false,
    isPlaying: true
  }

  handleClick = (id) => {
    
    if (this.state.isPlaying) {

      if (!this.state.chosen.includes(id)) {
  
        let tiles = document.querySelectorAll(".tileSet li");
  
        if (this.state.chosen.length === 0) {
          tiles.forEach(item => {
            item.classList.remove("hinge")
            item.style.visibility = "visible";
          });
        }
  
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
  
        document.querySelector(`#tile${id}`).classList.add("hinge");
        // document.querySelector(`#tryAgain`).style.visibility = "none";
        this.setState({isPlaying: false});

        setTimeout(() => {
          document.querySelector(`#tile${id}`).style.visibility = "hidden";
        }, 2000);

        setTimeout(() => {
          // document.querySelector(`#tile${id}`).style.visibility = "visible";
          // document.querySelector(`#tryAgain`).style.visibility = "visible";
          this.setState({isPlaying: true});
        }, 4000);
        
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

    let tileSet = this.state.tiles.map((tile) => <GameBoard className="animated" key={tile.id} {...tile} handleClick={this.handleClick} />)

    return (
      <div style={{background: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/debut_light.png")'}}>
        <Navbar correct={this.state.correct} score={this.state.score} topScore={this.state.topScore} gameStatus={this.state.win} isPlaying={this.state.isPlaying} />
        <Header correct={this.state.correct} />
          <div className="container">
            <ul className="tileSet text-center">
              {tileSet}
            </ul>
        </div>
        <Footer correct={this.state.correct} />
      </div>
    );
  }
}

export default App;