import React from "react";
import "./About.css";
import about_img from "../../assets/f8.jpeg";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className="play-icon" onClick={()=>{
            setPlayState(true)
          }} />
        </div>
        <div className="about-right">
  <h3>OUR STORY</h3>
  <h2>Where Sustainability meets Flavor</h2>
  <p>
    Founded in 2020, Manasu Farms began with a simple mission: to provide the community with fresh, organic produce. What started as a small family farm has blossomed into a thriving business, all while maintaining our commitment to sustainable farming practices.
  </p>
  
  <h4>Our Values:</h4>
  <ul>
    <li><strong>Sustainability:</strong> We employ eco-friendly farming techniques to preserve the environment.</li>
    <li><strong>Community:</strong> Building strong relationships with our customers and neighbors.</li>
    <li><strong>Transparency:</strong> Open about our farming methods and product origins.</li>
  </ul>

  <h4>Meet the Team:</h4>
  <p>Our dedicated team works tirelessly to ensure every product meets our high standards.</p>
</div>

      </div>
    </>
  );
};

export default About;
