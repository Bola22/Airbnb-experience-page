import React from "react";
import hero from "../hero.png"

export default function Hero() {
    return (
        <div className="hero-section">
            <img className="hero-image" src={hero}/>

            <h2 className="hero-title">Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}