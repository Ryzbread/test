import React from 'react'
import NavBar from './NavBar';

function Header(props) {
    return (
        <header className="App-header">
            <title>{props.appName}</title>
            <NavBar appName = "App Name" />
        </header>
    );
}

export default Header