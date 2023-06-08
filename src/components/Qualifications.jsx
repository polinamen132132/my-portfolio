export const Qualifications = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className="qualification_button button--flex qualification_active"
            data-target="#work"
          >
            <i className="uil uil-briefcase-alt qualification_icon" /> Work
          </div>
          <div
            className="qualification_button button--flex qualification_active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification_icon" />
            Education
          </div>
        </div>
        <div className="qualification_sections">
          {/*==================== QUALIFICATION CONTENT 1 ===================*/}
          <div
            className="qualification_content qualification_active"
            data-content
            id="education"
          >
            {/*==================== QUALIFICATION  1 ===================*/}
            <div className="qualification_data">
              <div>
                <h3 className="qualifiaction_title">
                  Junior Front-End Developer
                </h3>
                <span className="qualification_subtitle">
                  Colaweb - Shanghai
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt" /> 2018-2020
                </div>
              </div>
              <div>
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
            </div>
            {/*==================== QUALIFICATION  2 ===================*/}
            <div className="qualification_data">
              <div />
              <div>
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
              <div>
                <h3 className="qualifiaction_title">Web Development Course</h3>
                <span className="qualification_subtitle">
                  Bootcamp - Shanghai
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt" /> 2018-2019
                </div>
              </div>
            </div>
            {/*==================== QUALIFICATION  3 ===================*/}
            <div className="qualification_data">
              <div>
                <h3 className="qualifiaction_title">Junior React Developer</h3>
                <span className="qualification_subtitle">
                  Ustav - Yekaterinburg
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt" /> 2020-2021
                </div>
              </div>
              <div>
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
            </div>
          </div>
          {/*==================== QUALIFICATION CONTENT 2 ===================*/}
          <div className="qualification_content" data-content id="work">
            {/*==================== QUALIFICATION  3 ===================*/}
            <div className="qualification_data">
              <div />
              <div>
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
              <div>
                <h3 className="qualifiaction_title">College diploma in CSIS</h3>
                <span className="qualification_subtitle">
                  Computing Studies and Information Systems <br />
                  Douglas college - Vancouver, BC
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt" /> 2021-2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
