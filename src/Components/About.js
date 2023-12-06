import React from "react";
import svg from "../assets/images/ab-img.png";

const About = () => {
  return (
    <section className="mh-about" id="mh-about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <div
              className="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img src={svg} loading="lazy" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-about-inner">
              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                About Me
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                Passionate graphic designer with a keen eye for detail and a
                flair for creative expression. Proficient in translating
                concepts into visually stunning designs that captivate
                audiences. Committed to delivering innovative solutions that
                leave a lasting impression and elevate brands to new heights
              </p>
              <div
                className="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <ul>
                  <li>
                    <span>design</span>
                  </li>
                  <li>
                    <span>photoshop</span>
                  </li>
                  <li>
                    <span>css</span>
                  </li>
                  <li>
                    <span>illustrator</span>
                  </li>
                  <li>
                    <span>after effects</span>
                  </li>
                  <li>
                    <span>Canva</span>
                  </li>
                  <li>
                    <span>Figma</span>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className="btn btn-fill wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                Downlaod CV <i className="fa fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
