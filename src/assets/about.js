import React from 'react'
import designanddevlopment from "../assets/Desigen&devlopment.png";
import Degitalmarketing from "../assets/Degitalmarketing.png";
import Seo from "../assets/Seo&blanklinks.png";
import mainaboutus from "../assets/mainabout-us.svg";

function About() {
  return (
    <>
    <div className="Container">
    <div class="boX">
      <img
        className="img2"
        src={designanddevlopment}
        alt="designanddevlopment"
        height={50}
        width={50}
      />
      <div className="text1">
        Design & Development
        <p className="Text1">
          Crafting innovative solutions <br></br>through a harmonious blend
          of creativity<br></br> and technical expertise.
        </p>
      </div>
    </div>
    <div class="boX">
      <img
        className="img2"
        src={Degitalmarketing}
        alt="Degitalmarketing"
        height={50}
        width={50}
      />
      <div className="text1">
        Digital Marketing
        <p className="Text1">
          Maximizing online presence<br></br> and driving results with
          strategic campaigns and <br></br> data-driven insights.
        </p>
      </div>
    </div>
    <div class="boX">
      <img
        className="img2"
        src={Seo}
        alt="Seo"
        height={50}
        width={50}
      />
      <div className="text1">
        SEO & Backlinks
        <p className="Text1">
          Boosting search engine visibility through powerful <br></br>{" "}
          optimization techniques and high-quality <br></br> backlinks for
          enhanced organic traffic.
        </p>
      </div>
    </div>
  </div>
  <div className="about">
    <p className="aboutus">
      <h3>Our Mission</h3>
      Our mission is to empower businesses and organizations with innovative
      and impactful digital solutions. We strive to be a one-stop
      destination for web development, UI/UX designing, logo making, and app
      development services. Through our creative expertise and technical
      excellence, we aim to deliver exceptional user experiences that
      elevate brands and drive success in the digital landscape. Our passion
      for pushing boundaries and delivering customer satisfaction fuels our
      commitment to fostering long-lasting partnerships and achieving
      excellence in every project we undertake.
    </p>
    <img
      className="img3"
      src={mainaboutus}
      alt="mainaboutus"
      height={100}
      width={100}
    />
  </div>
  </>
  )
}

export default About;