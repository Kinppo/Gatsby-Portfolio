import React from "react";
import avatar1 from "../assets/images/reviews/1.png";
import avatar2 from "../assets/images/reviews/2.jpg";
import avatar3 from "../assets/images/reviews/5.png";

const Reviews = () => {
  return (
    <section className="mh-testimonial" id="mh-testimonial">
      <div className="home-v-img">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 section-title">
              <h3>Client Reviews</h3>
            </div>
            <div
              className="d-flex flex-md-row flex-column"
              id="mh-client-review"
            >
              <div className="each-client-item">
                <div className="mh-client-item dark-bg black-shadow-1">
                  <img
                    src={avatar3}
                    alt=""
                    className="img-fluid"
                    style={{ width: 120, height: 120 }}
                  />
                  <p>
                    Mohammed exceeded expectations! he crafted a logo that
                    perfectly embodies our brand. Exceptional creativity and
                    attention to detail. Highly recommended!
                  </p>
                  <h4>Mouaad</h4>
                  <span>Deevlap</span>
                </div>
              </div>
              <div className="each-client-item">
                <div className="mh-client-item dark-bg black-shadow-1">
                  <img
                    src={avatar2}
                    alt=""
                    className="img-fluid"
                    style={{ width: 120, height: 120 }}
                  />
                  <p>
                    Mohammed is a design genius! He transformed our website with
                    a perfect blend of creativity and functionality. Highly
                    recommend for an exceptional design experience!
                  </p>
                  <h4>John Jensen</h4>
                  <span>Online Client</span>
                </div>
              </div>

              <div className="each-client-item">
                <div className="mh-client-item dark-bg black-shadow-1">
                  <img
                    src={avatar1}
                    alt=""
                    className="img-fluid"
                    style={{ width: 120, height: 120 }}
                  />
                  <p>
                    Mohammed is a creative force! his animations brought our
                    project to life, seamlessly blending art and storytelling.
                    Highly recommend for dynamic and impactful designs!
                  </p>
                  <h4>Younes</h4>
                  <span>Fikralabs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
