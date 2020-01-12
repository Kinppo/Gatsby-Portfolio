import React from "react"
import avatar from "../assets/images/c-1.png"
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
                  <img src={avatar} alt="" className="img-fluid" />
                  <p>
                    Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality
                  </p>
                  <h4>John Mike</h4>
                  <span>CEO, Author.Inc</span>
                </div>
              </div>
              <div className="each-client-item">
                <div className="mh-client-item dark-bg black-shadow-1">
                  <img src={avatar} alt="" className="img-fluid" />
                  <p>
                    Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality
                  </p>
                  <h4>John Mike</h4>
                  <span>CEO, Author.Inc</span>
                </div>
              </div>

              <div className="each-client-item">
                <div className="mh-client-item dark-bg black-shadow-1">
                  <img src={avatar} alt="" className="img-fluid" />
                  <p>
                    Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality
                  </p>
                  <h4>John Mike</h4>
                  <span>CEO, Author.Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
