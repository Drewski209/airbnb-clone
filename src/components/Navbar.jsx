import React from "react"
import Logo from "../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav>
            <img
            className="nav--logo"
            src = {Logo}
            alt = "Airbnb Logo"
            />
        </nav>
    )
}

export default Navbar