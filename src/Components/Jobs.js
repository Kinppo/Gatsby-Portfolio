import React from "react";

const Jobs = () => {
  return (
    <section className="mh-service">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 text-center section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h2>What I do</h2>
          </div>
          <div className="col-md-4 col-sm-12">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-bullseye purple-color"></i>
              <h3>Logo Design</h3>
              <p>
                Creating unique and memorable logos that not only expertly
                represent a brand's identity but also leave an indelible mark in
                the minds of audiences, forging lasting brand connections.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-code iron-color"></i>
              <h3>Branding and Identity</h3>
              <p>
                Developing a consistent visual identity, including color
                schemes, typography, and design elements, to reinforce brand
                recognition.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-object-ungroup sky-color"></i>
              <h3>Web Design</h3>
              <p>
                Crafting visually appealing websites, demonstrating expertise in
                meticulous layout design, and aesthetic enhancements for an
                engaging online user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
