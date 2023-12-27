import React, { useState }  from 'react';
import Home from './HomePage';
import About from './AboutPage';
import Settings from './Settings';
import NavMenu from './NavMenu';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

function Navigation(props) {

  const [showNavMenu,setShowNavMenu]  = useState(false)
  let navMenu

  if(showNavMenu) {
      navMenu = <NavMenu clickAction = {() => setShowNavMenu()}/>
  }
  else {
      navMenu = <></>
  }

  return (

    <div>
      <div className="Title-Header" >
        <span>{props.appName}</span>
      </div>
      <div className="Hamburger">
        <span className='icon' onClick={() => setShowNavMenu(!showNavMenu)}>☰</span>
      </div>
      <Router>
        
          {navMenu}

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default Navigation