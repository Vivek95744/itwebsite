import React, { useState, useEffect } from "react";
import mainimg from "../../assets/main banner.svg";
import Typewriter from "typewriter-effect";
import "./home.css";
// back to top button
function Home() {
const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick7 = () => {
    window.scrollTo({ top: 550, behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <p className="Text">Welcome To Valora Infotech,</p>
          <p className="text">
            Our Mission Is &nbsp;
            <div className="typewriter-container">
  <Typewriter 
    options={{
      strings: [
        " Web Development",
        " App Development",
        " Hosting",
        " UI/UX Design",
        " Game Development",
      ],
      autoStart: true,
      loop: true,
    }}
  />
 
</div>
          </p>
           <div className="bt">
        <button class="btn" onClick={handleClick7} > 
          <span>Start</span>
        </button>
      </div>
        </div>
        <div className="row2"></div>
        <img className="img" src={mainimg} alt="Example" height={450} width={450} />
      </div>
      <div
      className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <svg className="vb" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512" fill="#ffffff"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </div>
    </>
  );
}

export default Home;
