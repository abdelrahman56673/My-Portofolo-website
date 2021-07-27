import React from "react";

function Navbar () {
    return (
        <nav className="navbar">
            <h1><a href="#" id="logo">Abdulrahman</a></h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;