import React from "react";
import "./style.css";

function Navbar(props) {

    let status;

    switch (props.correct) {

        case true:
            if (props.gameStatus) {
                status = <li className="feedback text-center" style={{color: "darkgreen", fontWeight: "bolder", textShadow: "0 8px 6px -6px #000000"}}>
                    <p className="winner animated pulse infinite">You did it! Great Job!</p>
                    <p style={{fontSize: "12px"}}>{window.screen.width > 768 ? "Click an Image to Play Again." : "Touch an Image to Play Again."}</p>
                </li>
            }
            else {
                status = <li className="feedback text-center" style={{color: "darkgreen", fontWeight: "bolder"}}>Correct! Keep it Up!</li>
            }
        break;

        case false:
        status = <li className="feedback text-center" style={{color: "#fff", fontWeight: "bold"}}>{!props.isPlaying ? "Game Over!" : window.screen.width > 768 ? "Click an Image to Try Again!" : "Touch an Image to Try Again!"}</li>
        break;

        default:
            status = <li className="feedback text-center">{window.screen.width > 768 ? "Click an Image to Get Started!" : "Touch an Image to Start!"}</li>
        break;
    }

    return (
        <div>
            <nav className="navbar navbar-light" style={props.correct === false ? {background: "#dc3545"} : null}>
            <ul type="none">
                <li className="brand h1 text-white text-center"><a href="http://heplayskeys.github.io/click-apes">Clickster</a></li>
                {status}
                <li className="text-center">Score: <span className="playerScore">{props.score}</span>&nbsp;&nbsp;|&nbsp;&nbsp;Top Score: <span className="topScore">{props.topScore}</span></li>
            </ul>
            </nav>
        </div>

    );
}

export default Navbar;