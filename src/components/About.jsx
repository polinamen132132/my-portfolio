export const About = () => {
  return (
    <section className="about section" id="about">
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        <div className="about_container grid">
          <img src="assets/img/about.jpg" alt="" className="about_img" />
          <div className="about_data">
            <p className="about_description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering qualiry
              work.
            </p>
            <div className="about_info">
              <div>
                <span className="about_info-title">08+</span>
                <span className="about_info-name">
                  Years <br /> experience
                </span>
              </div>
              <div>
                <span className="about_info-title">20+</span>
                <span className="about_info-name">
                  Completed <br /> projects
                </span>
              </div>
              <div>
                <span className="about_info-title">05+</span>
                <span className="about_info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>
            <div className="about_buttons">
              <a
                href={process.env.PUBLIC_URL + "/Polina.pdf"}
                download="Polina.pdf"
                className="button button--flex"
              >
                Download <i className="uil uil-download-alt button_icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
