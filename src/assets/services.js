import React from 'react'
import webdevlopment from "../assets/Webdevlopmentimg.svg";
import socialmediaia from "../assets/Socialmediaimg.svg";
import emailmarketing from "../assets/Emailmarketingimg.webp";
import uiuxdesigener from "../assets/Ui-Uxdesigenimg.webp";
import hosting from "../assets/Hostingimg.webp";
import appdevlopment from "../assets/appdevlopmentimg.svg";

function Service() {
  return (
    <div className="servi">
    <h3 className="service"> Services </h3>
    <h4 className="slogan">Transforming Dreams into Reality.</h4>
    <div className="container1">
      <div class="Box">
        <img
          className="img4"
          src={webdevlopment}
          alt="webdevlopment"
          height={100}
          width={150}
        />
        <div className="text11">Web Development</div>
        <p className="Text11">
          Need affordable website design<br></br> and development with
          responsive web design<br></br> without compromising on quality.
        </p>
      </div>
      <div class="Box">
        <img
          className="img4"
          src={socialmediaia}
          alt="socialmediaia"
          height={100}
          width={150}
        />
        <div className="text11">Social Media Marketing</div>
        <p className="Text11">
          Boost your brand's visibility and<br></br> engagement with
          cost-effective, high-quality<br></br> social media marketing
          services.
        </p>
      </div>
      <div class="Box">
        <img
          className="img4"
          src={emailmarketing}
          alt="emailmarketing"
          height={100}
          width={150}
        />
        <div className="text11">Email Marketing</div>
        <p className="Text11">
          Looking for budget-friendly <br></br>social email marketing
          services to boost <br></br>your brand's reach and engagement.
        </p>
      </div>
    </div>
    <div className="container1">
      <div class="Box">
        <img
          className="img4"
          src={uiuxdesigener}
          alt="uiuxdesigener"
          height={100}
          width={150}
        />
        <div className="text11">UI/UX Design</div>
        <p className="Text11">
          We are a dedicated team of UI/UX designers,<br></br> committed to
          creating world-class designs for<br></br> your web and mobile
          applications.
        </p>
      </div>
      <div class="Box">
        <img
          className="img4"
          src={hosting}
          alt="hosting"
          height={100}
          width={150}
        />
        <div className="text11">Hosting</div>
        <p className="Text11">
          We offer highly affordable web hosting services<br></br> catering
          to a wide range of websites, <br></br>from small static sites to
          large-scale portals.
        </p>
      </div>
      <div class="Box">
        <img
          className="img4"
          src={appdevlopment}
          alt="appdevlopment"
          height={100}
          width={150}
        />
        <div className="text11">App Development</div>
        <p className="Text11">
          Take your business to new heights with a <br></br> mobile app.At
          Brothers Tech, we'll assist you in <br></br>achieving your
          business goals.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Service;