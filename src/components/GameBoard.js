import React from "react";
import "./style.css";

function GameBoard(props) {

    return (

        <li id={`tile${props.id}`} className="gameTile" onClick={() => props.handleClick(props.id)}>
            <img className="img-thumbnail" src={props.image} alt="gorilla" />
        </li>

    );
}

export default GameBoard;