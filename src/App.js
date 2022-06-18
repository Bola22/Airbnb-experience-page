import React from "react";
import Navbar from "./compunents/Navbar"
import Hero from "./compunents/Hero"
import Card from "./compunents/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key = {item.id}
                {...item}

            />
        )
    })

    return (
        <div className="container">
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}



// img = {item.coverImg}
// ratings = {item.stats.rating}
// reveiw = {item.stats.reviewCount}
// country = {item.location}
// title = {item.title}
// price = {item.price}
// openSpots = {item.openSpots}