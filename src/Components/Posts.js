import React from "react";
import pic1 from "../assets/images/p1.webp";
import pic2 from "../assets/images/p2.webp";
import pic3 from "../assets/images/p3.webp";

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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.creativebloq.com/photoshop/free-photoshop-brushes-11121140"
                  >
                    68 of the best free Photoshop brushes
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a target="_blank" rel="noopener noreferrer" href=" ">
                        12.05.2023
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Get creative and productive with these brilliant new free
                  Photoshop brushes.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.creativebloq.com/photoshop/free-photoshop-brushes-11121140"
                >
                  Read More
                </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.creativebloq.com/buying-guides/best-ai-art-generators"
                  >
                    The best AI art generators in December 2023
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a target="_blank" rel="noopener noreferrer" href=" ">
                        12.02.2023
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Turn text to images with the best AI art generators for
                  illustration, design and more.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.creativebloq.com/buying-guides/best-ai-art-generators"
                >
                  Read More
                </a>
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.creativebloq.com/buying-guides/best-monitor-for-graphic-artists"
                  >
                    Best monitor for graphic artists in 2023
                  </a>
                </h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li>
                      <strong>Post On</strong>
                      <a target="_blank" rel="noopener noreferrer" href=" ">
                        11.20.23
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  These are the best monitors for graphic artists that you can
                  buy from across the price spectrum.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.creativebloq.com/buying-guides/best-monitor-for-graphic-artists"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
