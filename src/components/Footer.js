import React from "react";
import "./style.css";

function Footer() {

    return (
        <div>
            <footer className="footer"></footer>
            <div className="footerFoot">
                <section className="footBrand">Clickster <img src="./favicon.png" alt="Clickster Icon" style={{opacity: 0.5}}/></section>
            </div>
        </div>
    );
}

export default Footer;