import React from "react";
import pic1 from "../assets/images/portfolio/g1.jpg";
import pic2 from "../assets/images/portfolio/g2.png";
import pic3 from "../assets/images/portfolio/g3.png";
import pic4 from "../assets/images/portfolio/g4.png";
import pic5 from "../assets/images/portfolio/g5.png";
import pic6 from "../assets/images/portfolio/g6.png";
import pic7 from "../assets/images/portfolio/g7.jpg";
import pic8 from "../assets/images/portfolio/g8.png";
import pic9 from "../assets/images/portfolio/g9.png";
export const Portfolio = () => {
  return (
    <section className="mh-portfolio" id="mh-portfolio">
      <div className="container">
        <div className="row section-separator">
          <div className="section-title col-sm-12">
            <h3>Recent Portfolio</h3>
          </div>
          <div className="part col-sm-12">
            <div className="mh-project-gallery col-sm-12" id="project-gallery">
              <div className="portfolioContainer row">
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic1} alt="img04" />
                    <figcaption className="fig-caption">
                      <h5 className="title">Print Design</h5>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic2} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Packaging Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic3} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Print Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic4} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Print Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic5} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Packaging Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic6} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Print Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic7} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Packaging Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic8} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Packaging Design</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12">
                  <figure>
                    <img src={pic9} alt="img04" />
                    <figcaption className="fig-caption">
                      <span className="title">Packaging Design</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
