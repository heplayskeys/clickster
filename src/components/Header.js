import React from "react";
import "./style.css";

function Header() {

    if (window.screen.width <= 480) {

    }

    return (
        <div>
            <header className="header">
                <div className="jumbotron jumbotron-fluid img-thumbnail">
                    <div className="container">
                        <h1>Clickster!</h1>
                        <p className="lead">{window.screen.width > 768 ? "Click on an image to earn points, but don't click on any more than once!" : "Touch an image to earn points, but don't touch on any more than once!"}</p>
                    </div>
                </div>
            </header>
            <div className="headerFoot"></div>
        </div>
    );
}

export default Header;