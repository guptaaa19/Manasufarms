import React from "react";
import "./Programs.css";
import program_1 from "../../assets/f2.jpeg";
import program_2 from "../../assets/f6.jpeg";
import program_3 from "../../assets/f7.jpeg";
import program_icon_1 from "../../assets/p2.png";
import program_icon_2 from "../../assets/p1.png";
import program_icon_3 from "../../assets/p3.png";

const Programs = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Seasonal Vegetables</p>
          </div>
        </div>

        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Exotic Fruits</p>
          </div>
        </div>

        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Vibrant Flowers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
