import myImage from "../assets/perfil.png";
import { saveAs } from "file-saver";

export const Home = () => {
  const fileUrl = process.env.PUBLIC_URL + "Polina-Menhikova-CV.pdf";

  const handleDownload = () => {
    const fileName = "Polina-Menhikova-CV.pdf";
    saveAs(fileUrl, fileName);
  };
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_img">
            <svg
              className="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />

                <image
                  href={myImage}
                  alt="My Image"
                  className="home_blob-img"
                  x={20}
                  y={-15}
                ></image>
              </g>
            </svg>
          </div>
          <div className="home_social">
            <a
              href="https://www.linkedin.com/in/polina-menshikova-799a69274/"
              target="_blank"
              className="home_social-icon"
            >
              <i className="uil uil-linkedin" />
            </a>
            <a
              href="https://github.com/polinamen132132"
              target="_blank"
              className="home_social-icon"
            >
              <i className="uil uil-github" />
            </a>
          </div>
          <div className="home_data">
            <div className="home_title-wrapper">
              <h1 className="home_title">Hi, I'm Polina</h1>
              <h3 className="home_subtitle">Frontend developer</h3>
              <p className="home_description">
                Experienced in web development and knowledgeable, I produce
                quality work.
              </p>
              <div className="about_buttons" onClick={handleDownload}>
                <a className="button button--flex">
                  Download CV
                  <i className="uil uil-download-alt button_icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home_scroll">
          <a href="#contact" className="home_scroll-button button--flex">
            <i className="uil uil-mouse-alt home_scroll-mouse" />
            <span className="home_scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home_scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};
