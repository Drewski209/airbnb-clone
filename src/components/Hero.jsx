import React from "react"
import Grid from "../images/photo-grid.png"

function Hero() {
return (
    <section>
        <img
        className="hero--photo"
        src= {Grid}
        alt = "collage"
        />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts all without leaving the house</p>
    </section>
    )
}

export default Hero