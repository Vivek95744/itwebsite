import React, { useEffect, useState } from 'react'
import './navbar.css'

function Navbar() {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      const handleClick1 = () => {
        window.scrollTo({ top: 550, behavior: "smooth" });
      };
      const handleClick2 = () => {
        window.scrollTo({ top: 1150, behavior: "smooth" });
      };
      const handleClick4 = () => {
        window.scrollTo({ top: 4330, behavior: "smooth" });
      };
      const handleClick5 = () => {
        window.scrollTo({ top: 8000, behavior: "smooth" });
      };
      const handleClick10 = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      const handleClick11 = () => {
        window.scrollTo({ top: 550, behavior: "smooth" });
      };
      const handleClick12 = () => {
        window.scrollTo({ top: 2700, behavior: "smooth" });
      };
      const handleClick14 = () => {
        window.scrollTo({ top: 7800, behavior: "smooth" });
      };
      const handleClick15 = () => {
        window.scrollTo({ top: 13000, behavior: "smooth" });
      };
    
    
      
        const toggleNavbar = () => {
          setExpanded(!expanded);
        };
    
    
      const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    
    
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav className={`responsive_nav ${scrolled ? "scrolled" : ""}`}>
        <div className='imgo'>
        <h3 className="brand" onClick={handleClick}>Valora Infotech</h3></div>
        <div className='navia'>
        <a className="Homenav" onClick={handleClick}>
          Home
        </a>
        <a className="Aboutnav" onClick={handleClick1}>
          About
        </a>
        <a className="servicenav" onClick={handleClick2}>
          Service
        </a>
        <a className="teamnav" onClick={handleClick4}>
        Portfolio
        </a>
        <a className="contectusnav" onClick={handleClick5}>
          Contactus
        </a>
        </div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${expanded ? 'expanded' : ''}`} >
          <div className="navbar-brand">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-toggle-icon">&#9776;</span>
            </button>
          </div>
          <ul className={`navbar-nav ${expanded ? 'expanded' : ''}`}>
            <li className="nav-item"onClick={handleClick10}>Home</li>
            <li className="nav-item"onClick={handleClick11}>About</li>
            <li className="nav-item"onClick={handleClick12}>Services</li>
            <li className="nav-item"onClick={handleClick14}>Portfolio</li>
            <li className="nav-item"onClick={handleClick15}>Contactus</li>
          </ul>
        </nav>
        
    </nav>
    </>
  )
}

export default Navbar;