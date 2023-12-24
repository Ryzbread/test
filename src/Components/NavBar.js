import React from 'react';
import Home from './HomePage';
import About from './AboutPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

function NavBar(props) {
    return (

        <Router>
            <div class="topnav">
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

            </div>
            <div>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default NavBar;