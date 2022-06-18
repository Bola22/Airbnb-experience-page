import React from "react";
import star from "../Star.png"


export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-section">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`../images/${props.coverImg}`}/>
            <div className="card-stats">
                <img className="card-star" src={star} />
                <span>{props.stats.ratings}</span>
                <span className="gray">({props.reveiw}) .</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
