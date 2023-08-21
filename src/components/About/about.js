import React from 'react'
import mainaboutus from "../../assets/mainabout-us.svg";
import './about.css';

function About() {
    return (
      <>
  <div className="about-container">
    <div>
      <h2 className="about-heading">About Us</h2>
      <p className="about-subheading">Because We Believe In Delivering Excellence!</p>
      <p className="about-paragraph">
        VALORA INFOTECH founded in 2018 with the Vision to form a world-class IT Company.
        VALORA INFOTECH is having skilled developers & creative minds to fulfill the requirement of clients globally. We work on Android, iPhone Application & Web. We have the highly professional technical staff and Good Skilled Management Members to run this company smoothly.
     
       <p className='zz'> <svg className="m" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ff6d53'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
    Highly skilled dedicated development team.</p>
    <p className='zz'> <svg className="m" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ff6d53'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
    Expertise in one stop IT solutions from strategy to delivery.</p>
    <p className='zz'> <svg className="m" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#ff6d53'><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
    We work as your IT partner, not just as service provider.</p>
    </p>
    </div>

 
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