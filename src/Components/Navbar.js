import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import "./Navbar.css"
import { IconContext } from "react-icons";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
      <div><FadeIn>
        <IconContext.Provider value={{ color: '#2596be' }}>
          <div className='navbar'>
              <Link to="/">
              <img 
              className="nav-logo"
              src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvc3F1YXJlLzUxMTI3NTEvMTU1NzIzOTk5NF9sb2dvLnBuZyIsImVkaXRzIjp7fX0="
              
              >
            
              </img>
              </Link>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
    
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                );
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </FadeIn></div>
    </>
  );
}
