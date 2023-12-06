import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="mh-footer" id="mh-contact">
      <div className="map-image image-bg">
        <div className="container">
          <div className="row section-separator last-section-separator">
            <Contact />
            <div className="col-sm-12 mh-copyright">
              <div className="row">
                <div className="col-sm-6">
                  <div className="text-left ">
                    <p>All right reserved &copy; 2024</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="text-right ">
                    <p>Developed By Kinppo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
