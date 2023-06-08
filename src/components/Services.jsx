import { useState } from "react";

export const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>
      <div className="services_container container grid">
        {/*==================== SERVICES 1 ====================*/}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon" />
            <h3 className="services_title">
              Ux/Ui <br />
              Designer
            </h3>
          </div>
          <span
            className="button--flex button--small button--link services_button"
            onClick={() => toggleTab(1)}
          >
            View More
            <i className="uil uil-arrow-right button_icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Ux/Ui <br /> Designer
              </h4>
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              />
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I specialize in creating and developing user interfaces.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>I specialize in developing web pages.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I design and implement user experience (UX) elements and
                    their interactions.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>I focus on positioning your company's brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*==================== SERVICES 2 ====================*/}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon" />
            <h3 className="services_title">
              Frontend <br />
              Developer
            </h3>
          </div>
          <span
            className="button--flex button--small button--link services_button"
            onClick={() => toggleTab(2)}
          >
            View More
            <i className="uil uil-arrow-right button_icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Frontend <br />
                Developer
              </h4>
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              />
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I create responsive websites that work flawlessly on all
                    devices
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I possess strong proficiency in JavaScript and its libraries
                    and frameworks.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I optimize front-end code, including minification, image
                    optimization, and caching, to ensure optimal performance.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I ensure that your website is compatible with different web
                    browsers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*==================== SERVICES 3 ====================*/}
        <div className="services_content">
          <div>
            <i className="uil uil-pen services_icon" />
            <h3 className="services_title">
              Backend <br />
              Developer
            </h3>
          </div>
          <span
            className="button--flex button--small button--link services_button"
            onClick={() => toggleTab(3)}
          >
            View More
            <i className="uil uil-arrow-right button_icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <h4 className="services_modal-title">
                Backend <br />
                Developer
              </h4>
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              />
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I specialize in developing the backend logic and
                    functionality of web applications.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I have expertise in designing and managing databases,
                    ensuring efficient storage and retrieval of data.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I integrate backend systems with external services and APIs.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon" />
                  <p>
                    I continuously optimize the backend code and database
                    queries.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
