import React from 'react'
import { Link } from "react-router-dom"
import './NavMenu.css'

function NavMenu(props) {
    return (
        <div className="navigation">
            <ul >
                {/* Left Menu Items */}
                <li>
                    <Link to="/" onClick={() => props.clickAction(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => props.clickAction(false)}>About</Link>
                </li>
                <li>
                    <Link to="/settings" onClick={() => props.clickAction(false)}>Settings</Link>
                </li>
            </ul>
            {/* dark background behind NavMenu */}
            <div className='overlay' onClick={() => props.clickAction(false)}/>
        </div>
    );
}

export default NavMenu