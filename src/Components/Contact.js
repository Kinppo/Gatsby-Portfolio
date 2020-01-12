import React from "react"

const Contact = () => {
  return (
    <div>
      <div
        className="col-sm-12 section-title wow fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >
        <h3>Contact Me</h3>
      </div>
      <div className="col-sm-12 mh-footer-address">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <div className="each-icon">
                <i className="fa fa-location-arrow"></i>
              </div>
              <div className="each-info">
                <h4>Address</h4>
                <address>
                  5th Avenue, 34th floor <br />
                  New york
                </address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <div className="each-icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="each-info">
                <h4>Email</h4>
                <a href="mailto:yourmail@email.com">yourmail@email.com</a>
                <br />
                <a href="mailto:yourmail@email.com">yourmail@email.com</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <div className="each-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="each-info">
                <h4>Phone</h4>
                <a href="callto:(880)-8976-987">(880)-8976-987</a>
                <br />
                <a href="callto:(880)-8976-987">(880)-8976-987</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-sm-12  wow fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <form
          id="contactForm"
          className="single-form quate-form wow fadeInUp"
          data-toggle="validator"
        >
          <div id="msgSubmit" className="h3 text-center hidden"></div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <input
                name="name"
                className="contact-name form-control"
                id="name"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                name="name"
                className="contact-email form-control"
                id="L_name"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col-sm-12">
              <input
                name="name"
                className="contact-subject form-control"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-sm-12">
              <textarea
                className="contact-message"
                id="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="btn-form col-sm-3 center">
              <button
                type="submit"
                className="btn btn-fill btn-block"
                id="form-submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
