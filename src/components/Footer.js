import React from "react";
import "./style.css";

function Footer() {

    return (
        <div>
            <footer className="footer"></footer>
            <div className="footerFoot">
                <section className="footBrand">Clickster<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" alt="React Icon" style={{filter: "grayscale(50%)"}}/></section>
            </div>
        </div>
    );
}

export default Footer;