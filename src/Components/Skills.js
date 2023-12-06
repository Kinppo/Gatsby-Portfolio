import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section className="mh-skills" id="mh-skills">
      <div className="container">
        <div className="row section-separator">
          <div className="section-title text-center col-sm-12">
            <h2>Skills</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div className="mh-professional-skill">
                <h3>Technical Skills</h3>
                <div className="each-skills">
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Photoshop</div>
                        <div className="percentagem-num">90%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Illustrator</div>
                        <div className="percentagem-num">85%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "46%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Affter Effects</div>
                        <div className="percentagem-num">80%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Figma</div>
                        <div className="percentagem-num">75%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Canva</div>
                        <div className="percentagem-num">65%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-professional-skills">
              <h3>Professional Skills</h3>
              <ul className="mh-professional-progress">
                <li>
                  <CircularProgressbar
                    value="70"
                    text="70%"
                    strokeWidth="5"
                    styles={buildStyles({
                      pathColor: "#0BCEAF",
                      textColor: "#0BCEAF",
                    })}
                  />
                  <div className="pr-skill-name">Communication</div>
                </li>
                <li>
                  <CircularProgressbar
                    value="66"
                    text="66%"
                    strokeWidth="5"
                    styles={buildStyles({
                      pathColor: "#0BCEAF",
                      textColor: "#0BCEAF",
                    })}
                  />
                  <div className="pr-skill-name">Team Work</div>
                </li>
                <li>
                  <CircularProgressbar
                    value="85"
                    text="85%"
                    strokeWidth="5"
                    styles={buildStyles({
                      pathColor: "#0BCEAF",
                      textColor: "#0BCEAF",
                    })}
                  />
                  <div className="pr-skill-name"> Management</div>
                </li>
                <li>
                  <CircularProgressbar
                    value="90"
                    text="90%"
                    strokeWidth="5"
                    styles={buildStyles({
                      pathColor: "#0BCEAF",
                      textColor: "#0BCEAF",
                    })}
                  />
                  <div className="pr-skill-name">Creativity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
