import React from "react";
import h from "../../assets/Ui-Uxdesigenimg.webp";
import Marquee from "react-fast-marquee";
import './ourclient.css';

function Ourclient() {

  const screenWidth = window.innerWidth;

  let gradientWidth = 600;

  if (screenWidth <= 900 && screenWidth > 400) {
    gradientWidth = 200;
  } else if (screenWidth <= 400) {
    gradientWidth = 100;
  }

return (
<div className="kk">
    <h3 className="tt">Our Client</h3>
<Marquee className="scroll-container1" pauseOnHover={true} gradient={true} autoFill={true} gradientWidth={gradientWidth}>
            
            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

            <div className="ani">
            <img
              src={h}
              alt="Example"
              className="img15"
              height={100}
              width={150}
            />
            </div>

           
           
       
      </Marquee> 
</div>
)

}

export default Ourclient;

 