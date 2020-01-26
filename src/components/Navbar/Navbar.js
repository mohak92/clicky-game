import React from "react";
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar d-flex justify-content-between px-5">
            <span><a href="/clicky-game">Clicky Game</a></span>
            <span>{props.msg}</span>
            <span>Score: {props.score} | Top Score: {props.topScore}</span>
        </nav>
    );
}

export default Navbar;