import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

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
                        <div className="nome">Javascript</div>
                        <div className="percentagem-num">86%</div>
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
                        <div className="nome">Java</div>
                        <div className="percentagem-num">46%</div>
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
                        <div className="nome">Python</div>
                        <div className="percentagem-num">38%</div>
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
                        <div className="nome">PHP</div>
                        <div className="percentagem-num">17%</div>
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
                        <div className="nome">CSS</div>
                        <div className="percentagem-num">17%</div>
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
                    value="66"
                    text="66%"
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
                    value="55"
                    text="55%"
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
                    value="86"
                    text="86%"
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
                    value="60"
                    text="60%"
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
  )
}

export default Skills
