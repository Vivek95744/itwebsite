import React from 'react'
import profilephoto from "../../assets/profilephotoimg.avif";
import './ourteam.css';

function Ourteam() {
  return (
    <>
    <div className="jj">
        <h3 className="h3">---Our Team---</h3>
      
      <div class="main">
        <div class="profilecard">
          <div className="img5">
            <img src={profilephoto} alt="profilephoto" height={220} width={900} />
          </div>
          <div class="caption">
            <h3>Vin Diesel</h3>
            <p>Senior App Developer</p>
          </div>
        </div>
        <div class="profilecard">
          <div className="img5">
            <img src={profilephoto} alt="profilephoto" height={220} width={900} />
          </div>
          <div class="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
          </div>
        </div>
        <div class="profilecard">
          <div className="img5">
            <img src={profilephoto} alt="profilephoto" height={220} width={900} />
          </div>
          <div class="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
          </div>
        </div>
        <div class="profilecard">
          <div className="img5">
            <img src={profilephoto} alt="profilephoto" height={220} width={900} />
          </div>
          <div class="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
          </div>
        </div>

        <div class="profilecard">
          <div class="img5">
            <img src={profilephoto} alt="profilephoto" height={220} width={900} />
          </div>
          <div class="caption">
            <h3>Tom Cruise</h3>
            <p>Full Stact Developer</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourteam;