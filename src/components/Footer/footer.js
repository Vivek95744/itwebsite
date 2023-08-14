import React, { useEffect, useState } from "react";
import whitelogo from "../../assets/Whitelogofooter.svg";
import "./footer.css";

function Footer() {
  const [scrolled, setScrolled] = useState(false);
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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick1 = () => {
    window.scrollTo({ top: 550, behavior: "smooth" });
  };
  const handleClick2 = () => {
    window.scrollTo({ top: 1430, behavior: "smooth" });
  };
  // const handleClick3 = () => {
  //   window.scrollTo({ top: 2500, behavior: "smooth" });
  // };
  const handleClick4 = () => {
    window.scrollTo({ top: 2500, behavior: "smooth" });
  };
  return (
    <footer className={`foot ${scrolled ? "scrolled" : ""}`}>
      <div className="row1">
        <div className="column about">
          <img src={whitelogo} alt="Logo" className="logo1" />
          <p className="za">
            We look for passionate people who love working on the latest
            technologies. We provide an environment conducive to personal and
            professional development. Join our team to learn & grow.
          </p>
        
        <div className="conte">
          
          <div>
            <h3 className="te">CONTACT US</h3>
            <p className="ac">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 384 512"
                fill="#ffffff"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              Find Us
            </p>
            <p className="zc">
              207, Akshar Square B/h Cancer Hospital, Dabholi Road,Surat INDIA
            </p>
          </div>
          <div>
            <p className="ac">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#ffffff"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              Mail
            </p>
            <p className="zc">admin@valorainfotech.com</p>
          </div>
        </div>
        <div className="fas">
        <div className="icon-container">
        <a href="mailto:admin@valorainfotech.com" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </a></div>
        <div className="icon-container">
        <a href="https://www.google.com/maps/place/Valora+infotech/@21.2331653,72.8151284,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04f967d5d93bb:0x77fb537ecd3fbc7!8m2!3d21.2331603!4d72.8177033!16s%2Fg%2F11fmd9ldb1?entry=ttu"target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        </a>
        </div>
        <div className="icon-container">
        <a href="https://www.linkedin.com/company/valorainfotech/about/" target="_blank" className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
        </div>
        </div>
        </div>
        
        
       
        <div className="column subscribe">
          <h3 className="zb">SEND US A MESSAGE</h3>
          <p className="za">
            Once you fill out this form, our sales representatives will contact
            you within 24 hours. They will further guide you from thereon.
          </p>
          <div class="input-field">
            <input type="text" required spellcheck="false"></input>
            <label>Your Name</label>
          </div>
          <div class="input-field">
            <input type="email" required spellcheck="false"></input>
            <label>Enter email</label>
          </div>
          <div class="input-field">
            <input type="text" required spellcheck="false"></input>
            <label>Subject</label>
          </div>
          <div class="input-field">
            <textarea
              className="ii"
              type="textarea"
              required
              spellcheck="false"
            ></textarea>
            <label>Message</label>
          </div>
          <div className="ops">
          <button className="nm">Send Message</button>
          </div>
        </div>
      </div>
     
      <div className="row3">
        <p>
          © Copyright <b>Valora Infotech</b>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
