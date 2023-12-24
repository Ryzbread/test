import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

function NavBar(props) {
    return (
        <div class="topnav">

            <Router>
                {/* Centered App Name */}
                <div className="topnav-centered">
                    <Link to="/">{props.appName}</Link>
                </div>

                {/* Left Menu Items */}
                <div>
                    <Link to="/">Home</Link>
                </div>

                {/* Right Menu Items */}
                <div className="topnav-right">
                    <Link to="/about">About</Link>
                </div>

            </Router>

        </div>
    );
}

export default NavBar;