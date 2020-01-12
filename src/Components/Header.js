import React, { useState } from "react"

const Header = () => {
  const [state, setState] = useState(false)
  return (
    <header
      className="black-bg mh-header nav-scroll mh-xs-mobile-nav wow fadeInUp"
      id="mh-header"
    >
      <div className={state ? "active overlay" : "overlay"}></div>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setState(!state)}
            >
              <span className="navbar-toggler-icon icon"></span>
            </button>
            <div
              className={
                state
                  ? "active collapse navbar-collapse"
                  : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ml-auto ml-sm-100">
                <li className="nav-item active">
                  <a className="nav-link" href="#mh-home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-experience">
                    Experiences
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
