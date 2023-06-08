export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">Polina</h1>
            <span className="footer_subtitle">Fronted developer</span>
          </div>
          <ul className="footer_links">
            <li>
              <a href="#services" className="footer_link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer_link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer_link">
                Contact me
              </a>
            </li>
          </ul>
          <div className="footer_socials">
            <a
              href="https://www.linkedin.com/in/polina-menshikova-799a69274/"
              target="_blank"
              className="footer_social"
            >
              <i className="uil uil-linkedin" />
            </a>
            <a
              href="https://github.com/polinamen132132"
              target="_blank"
              className="footer_social"
            >
              <i className="uil uil-github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
