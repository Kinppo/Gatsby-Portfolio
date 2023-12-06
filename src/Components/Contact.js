import React, { useState } from "react";
import Popup from "./Popup";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const Contact = () => {
  const [contact, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [popupState, setPopup] = useState("walo");
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact }),
    })
      .then(() => {
        setPopup("sucess");
      })
      .catch(() => {
        setPopup("error");
      });

    e.preventDefault();
  };
  return (
    <div id="contact">
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
                <address>Agadir City, Morocco</address>
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
                <a href="mailto:mdamaou@email.com">mdamaou@email.com</a>
                <br />
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
                <a href="callto:(880)-8976-987">(+212) 678593627</a>
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
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="single-form quate-form"
          onSubmit={handleSubmit}
          id="contactForm"
        >
          <div id="msgSubmit" className="h3 text-center hidden"></div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <input
                name="firstname"
                className="contact-name form-control"
                id="name"
                type="text"
                placeholder="First Name"
                required
                value={contact.firstname}
                onChange={(e) => {
                  const val = e.target.value;
                  setState((prevState) => {
                    return { ...prevState, firstname: val };
                  });
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                name="lastname"
                className="contact-email form-control"
                id="L_name"
                type="text"
                placeholder="Last Name"
                required
                value={contact.lastname}
                onChange={(e) => {
                  const val = e.target.value;
                  setState((prevState) => {
                    return { ...prevState, lastname: val };
                  });
                }}
              />
            </div>
            <div className="col-sm-12">
              <input
                name="email"
                className="contact-subject form-control"
                id="email"
                type="email"
                placeholder="Your Email"
                required
                value={contact.email}
                onChange={(e) => {
                  const val = e.target.value;
                  setState((prevState) => {
                    return { ...prevState, email: val };
                  });
                }}
              />
            </div>
            <div className="col-sm-12">
              <textarea
                name="message"
                className="contact-message"
                id="message"
                rows="6"
                placeholder="Your Message"
                required
                value={contact.message}
                onChange={(e) => {
                  const val = e.target.value;
                  setState((prevState) => {
                    return { ...prevState, message: val };
                  });
                }}
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
      <Popup type={popupState} setPopup={setPopup} />
    </div>
  );
};

export default Contact;
