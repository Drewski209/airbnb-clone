import React from "react"
import Star from "../images/gold_star.png"

function Card (props) {
    let badgeText
    if (props.item.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
            className="card--image"
            src= {`../images/${props.item.coverImg}`}
            alt = ""
            />
            <div className="card--status">
                <img
                className="card--star"
                src = {Star}
                alt = "star"
                />
                <span>{props.item.rating}</span>
                <span>({props.item.stats.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card