import React ,{useRef}from "react";

import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";


const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  };

   const slideBackward = () => {
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
   };

  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            {/* user-1 */}
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" className="user-1" />
                  <div>
                    <h3>Preethi Gowda</h3>
                    <span>Hassan,Karnataka</span>
                  </div>
                </div>
              </div>
              <p>
                The quality of vegetables is great, they're fresh, the quantity is enough to feed a whole family. I also love that local farmers are supported, and I can rely on a surprise bundle to arrive every Monday. My mom and I get on call every Monday to see what the bundle brings and think up recipes. It's like being home.”
              </p>
            </li>
            {/*user-2 */}

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" className="user-2" />
                  <div>
                    <h3>Ashwini Bagewadi</h3>
                    <span>Koppal,Karnataka</span>
                  </div>
                </div>
              </div>
              <p>
                The Wild Forest Raw Honey is divine! Its rich, floral flavor is unmatched, and knowing it's organic adds to its appeal. Highly recommended for anyone seeking pure, natural products
              </p>
            </li>
            {/* user-3*/}

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" className="user-3" />
                  <div>
                    <h3>Radhika Jayaraman</h3>
                    <span>Bidar,Karnataka</span>
                  </div>
                </div>
              </div>
              <p>
                Manasu Farms has delivered incredibly fresh, toxin-free vegetables even in the toughest situations. Their team is super friendly and always tries to meet individual needs. Once, I requested a jackfruit, and they managed to get it for me, even though it wasn't on the list! Kudos to an awesome team!
              </p>
            </li>
            {/*user-4 */}

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" className="user-4" />
                  <div>
                    <h3>Priya Sharma</h3>
                    <span>Hassan,Karnataka</span>
                  </div>
                </div>
              </div>
              <p>
                I’ve been purchasing from Manasu for the past few months, and the quality of the produce is exceptional. The vegetables are always fresh, vibrant, and full of flavor. It's reassuring to know that I'm supporting sustainable farming practices while enjoying healthy, chemical-free food. The delivery is prompt, and the customer service is always attentive. I highly recommend [Your Farm Name] to anyone seeking authentic organic produce.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
