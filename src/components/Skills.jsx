import React, { useState } from "react";

export const Skills = () => {
  const [frontEndSkillsOpen, setFrontEndSkillsOpen] = useState(true);
  const [backEndSkillsOpen, setBackEndSkillsOpen] = useState(false);
  const [designerSkillsOpen, setDesignerSkillsOpen] = useState(false);

  const handleToggleFrontEndSkills = () => {
    setFrontEndSkillsOpen(!frontEndSkillsOpen);
  };

  const handleToggleBackEndSkills = () => {
    setBackEndSkillsOpen(!backEndSkillsOpen);
  };

  const handleToggleDesignerSkills = () => {
    setDesignerSkillsOpen(!designerSkillsOpen);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div>
          {/*==================== SKILLS 1 ====================*/}
          <div
            className={`skills_content ${
              frontEndSkillsOpen ? "skills_open" : "skills_close"
            }`}
          >
            <div className="skills_header">
              <i className="uil uil-brackets-curly skills_icon" />
              <div>
                <h1 className="skills_title">Frontend developer</h1>
                <span className="skills_subtitle">More than 2 years</span>
              </div>
              <i
                className="uil uil-angle-down skills_arrow"
                onClick={handleToggleFrontEndSkills}
              />
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">85%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react" />
                </div>
              </div>
            </div>
          </div>
          {/*==================== SKILLS 2 ====================*/}
          <div
            className={`skills_content ${
              backEndSkillsOpen ? "skills_open" : "skills_close"
            }`}
          >
            <div className="skills_header">
              <i className="uil uil-server-network skills_icon" />
              <div>
                <h1 className="skills_title">Backend developer</h1>
                <span className="skills_subtitle">More than 2 years</span>
              </div>
              <i
                className="uil uil-angle-down skills_arrow"
                onClick={handleToggleBackEndSkills}
              />
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">PHP</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_php" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Node JS</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_node" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Firebase</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_firebase" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Python</h3>
                  <span className="skills_number">55%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_python" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/*==================== SKILLS 3 ====================*/}
          <div
            className={`skills_content ${
              designerSkillsOpen ? "skills_open" : "skills_close"
            }`}
          >
            <div className="skills_header">
              <i className="uil uil-swatchbook skills_icon" />
              <div>
                <h1 className="skills_titles">Designer</h1>
                <span className="skills_subtitle">More than 3 years</span>
              </div>
              <i
                className="uil uil-angle-down skills_arrow"
                onClick={handleToggleDesignerSkills}
              />
            </div>
            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Figma</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_figma" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Skecth</h3>
                  <span className="skills_number">85%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_sketch" />
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Photoshop</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_photoshop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
