import React from "react";
import "./style.css";

function Header() {

    return (
        <div>
            <header className="header">
                <div className="jumbotron jumbotron-fluid img-thumbnail">
                    <div className="container">
                        <h1>Clickster!</h1>
                        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    </div>
                </div>
            </header>
            <div className="headerFoot"></div>
        </div>
    );
}

export default Header;