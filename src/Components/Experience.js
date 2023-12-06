import React from "react";

const Experience = () => {
  return (
    <section className="mh-experince" id="mh-experience">
      <div className="bolor-overlay">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 col-md-6">
              <div className="mh-education">
                <h3>Education</h3>
                <div className="mh-education-deatils">
                  <div className="mh-education-item dark-bg">
                    <h4>
                      Graphic Designer{" "}
                      <a href=" ">Casablanca School of Art and Design</a>
                    </h4>
                    <div className="mh-eduyear">2016-2019</div>
                    <p>
                      Graduated from an art and design school with a solid
                      foundation in visual communication, mastering design
                      principles, and honing proficiency in industry-standard
                      tools. Acquired skills in conceptualizing and executing
                      creative projects, including graphic design, illustration,
                      and multimedia applications. Developed a keen eye for
                      detail, a deep understanding of color theory, and the
                      ability to translate ideas into compelling visual
                      narratives.
                    </p>
                  </div>

                  <div className="mh-education-item dark-bg">
                    <h4>
                      Adobe Certified Professional <a href=" ">Adobe</a>
                    </h4>
                    <div className="mh-eduyear">2020</div>
                    <p>
                      The Adobe Certified Professional program includes badges
                      in Dreamweaver, Flash Photoshop, Premiere, Illustrator,
                      InDesign and Animate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-work">
                <h3>Work Experience</h3>
                <div className="mh-experience-deatils">
                  <div className="mh-work-item dark-bg" data-delay="0.4s">
                    <h4>
                      Graphic Designer <a href=" ">Fikralabs</a>
                    </h4>
                    <div className="mh-eduyear">2019-2020</div>
                    <span>Responsibility :</span>
                    <ul className="work-responsibility">
                      <li>
                        <i className="fa fa-circle"></i>Web Designs
                      </li>
                      <li>
                        <i className="fa fa-circle"></i>Logo Designs
                      </li>
                      <li>
                        <i className="fa fa-circle"></i>Print Design
                      </li>
                    </ul>
                  </div>

                  <div className="mh-work-item dark-bg">
                    <h4>
                      Graphic Designer <a href=" ">Deevlap</a>
                    </h4>
                    <div className="mh-eduyear">2021-2023</div>
                    <span>Responsibility :</span>
                    <ul className="work-responsibility">
                      <li>
                        <i className="fa fa-circle"></i>Web Design
                      </li>
                      <li>
                        <i className="fa fa-circle"></i>2D Design
                      </li>
                      <li>
                        <i className="fa fa-circle"></i>Print Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
