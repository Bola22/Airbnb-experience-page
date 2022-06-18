import React from "react";
import logo from "../airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img className="logo" src={logo} />
        </nav>
    )
}