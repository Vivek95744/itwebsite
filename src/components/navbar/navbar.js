import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTodown = () => {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  };

  // Adding a scroll event listener to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      // Get the elements you want to animate
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll,.animate-on-scroll1,.animate-on-scroll2');

      elementsToAnimate.forEach(element => {
        const bounding = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (
          bounding.top <= window.innerHeight &&
          bounding.bottom >= 0 &&
          bounding.left <= window.innerWidth &&
          bounding.right >= 0
        ) {
          // Add animation class when element is in viewport
          element.classList.add('animate');
        }
      });
    };
    handleScroll()

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav className='responsive_nav '>
        <div className='imgo animate-on-scroll'>
          <Link onClick={scrollToTop}   className='qwqw'>
            <h3 className="brand">Valora Infotech</h3>
          </Link>
        </div>
        <div className='navia animate-on-scroll'>
          <Link onClick={scrollToTop} className="Homenav">
            Home
          </Link>
          <Link to="about" className="Aboutnav">
            About
          </Link>
          <Link to="service" className="servicenav">
            Service
          </Link>
          <Link to="portfolio" className="teamnav">
            Portfolio
          </Link>
          <Link onClick={scrollTodown} className="contectusnav">
            Contact Us
          </Link>
        </div>
        <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
  <div className="navbar-brand animate-on-scroll">
    <button className="navbar-toggle" onClick={toggleNavbar}>
      <span className="navbar-toggle-icon">&#9776;</span>
    </button>
  </div>
  <ul className={`navbar-nav ${expanded ? 'expanded' : ''}`}>
    <li className="nav-item">
      <Link className='qwqw' onClick={() => { toggleNavbar(); scrollToTop(); }}>Home</Link>
    </li>
    <li className="nav-item">
      <Link to="about" className='qwqw' onClick={toggleNavbar}>About</Link>
    </li>
    <li className="nav-item">
      <Link to="service" className='qwqw' onClick={toggleNavbar}>Services</Link>
    </li>
    <li className="nav-item">
      <Link to="portfolio" className='qwqw' onClick={toggleNavbar}>Portfolio</Link>
    </li>
    <li className="nav-item">
      <Link className='qwqw' onClick={() => { toggleNavbar(); scrollTodown(); }}>Contact Us</Link>
    </li>
  </ul>
</nav>





      </nav>
    </>
  )
  }

export default Navbar;
