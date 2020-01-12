import React from "react"
import profile from "../assets/images/hero.png"

const Showcase = () => {
  return (
    <section className="mh-home" id="mh-home">
      <div className="home-ovimg">
        <div className="container">
          <div className="row xs-column-reverse section-separator vertical-middle-content">
            <div className="col-sm-6">
              <div className="mh-header-info">
                <div
                  className="mh-promo wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  <span>Hello I'm</span>
                </div>

                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Jhon Doe
                </h2>
                <h4
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  Web Consultant
                </h4>

                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:">email@gmail.com</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa fa-phone"></i>
                    <a href="callto:">+1 000 000 0000</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-map-marker"></i>
                    <address>37, manhattan, New York, United State</address>
                  </li>
                </ul>

                <ul
                  className="social-icon wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <li>
                    <a href=" ">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="hero-img"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div>
                  <img src={profile} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
