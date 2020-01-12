import React from "react"
import pic1 from "../assets/images/b-3.png"
import pic2 from "../assets/images/b-2.png"
import pic3 from "../assets/images/b-1.png"

const Posts = () => {
  return (
    <section className="mh-blog" id="mh-blog">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h3>Featured Posts</h3>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-blog-item dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <img src={pic1} alt="" className="img-fluid" />
              <div className="blog-inner">
                <h2>
                  <a href="blog-single.html">
                    A life without the daily traffic jams
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a href=" ">24.11.19</a>
                    </li>
                    <li>
                      <strong>By</strong>
                      <a href=" ">Jhon</a>
                    </li>
                  </ul>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="blog-single.html">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-blog-item dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <img src={pic2} alt="" className="img-fluid" />
              <div className="blog-inner">
                <h2>
                  <a href="blog-single.html">
                    Proportion are what’s really needed
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a href=" ">24.11.19</a>
                    </li>
                    <li>
                      <strong>By</strong>
                      <a href=" ">Jon</a>
                    </li>
                  </ul>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="blog-single.html">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="mh-blog-item dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <img src={pic3} alt="" className="img-fluid" />
              <div className="blog-inner">
                <h2>
                  <a href="blog-single.html">
                    Mounts of paper work to remember the way
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a href=" ">24.11.19</a>
                    </li>
                    <li>
                      <strong>By</strong>
                      <a href=" ">Jhon</a>
                    </li>
                  </ul>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <a href="blog-single.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts
