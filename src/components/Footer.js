import React from "react";
import "./style.css";

function Footer(props) {

    return (
        <div>
            <footer className="footer" style={props.correct === false ? {background: "#dc3545"} : null}></footer>
            <div className="footerFoot">
                <section className="footBrand" style={props.correct === false ? {background: "#dc3545"} : null}>Clickster <img src="./favicon.png" alt="Clickster Icon" style={{opacity: 0.5}}/></section>
            </div>
        </div>
    );
}

export default Footer;