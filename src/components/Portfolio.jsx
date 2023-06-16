import { useRef } from "react";
import iphone from "../assets/work-2.png";
import projectSecond1 from "../assets/work-1.png";
import projectThird1 from "../assets/work-3.png";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most recent work</span>

      <div className="portfolio_container">
        <div className="container">
          {/* ================ PROJECT 1 ================ */}
          <div className="portfolio_project-first">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>FinSecure</h1>
                <span>Front-end Developer • UI Designer </span>
                <p>
                  FinSecure is a robust banking app that provides a secure and
                  convenient way to manage your finances. With FinSecure, you
                  can easily access your accounts, make transactions, and stay
                  on top of your financial goals.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img src={iphone} style={{ width: "396px", height: "338px" }} />
              </div>
            </div>
          </div>
          {/* ================ PROJECT 2 ================ */}
          <div className="portfolio_project-second">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>YumDrop</h1>
                <span>Front-end Developer • UI Designer </span>
                <p>
                  YumDrop makes it easy to order delicious meals from your
                  favorite local restaurants. With a user-friendly interface and
                  lightning-fast delivery service, YumDrop ensures a hassle-free
                  experience, bringing delectable dishes straight to your
                  doorstep.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img
                  src={projectSecond1}
                  style={{ width: "415px", height: "366px" }}
                />
              </div>
            </div>
          </div>
          {/* ================ PROJECT 3 ================ */}
          <div className="portfolio_project-third">
            <div className="portfolio_project-container">
              <div className="portfolio_project-description">
                <h1>StyleHub</h1>
                <span>Front-end Developer • UI Designer </span>
                <p>
                  StyleHub is a stylish clothing app that combines fashion
                  inspiration with effortless shopping. With StyleHub, you can
                  explore the latest trends, create your dream outfits, and
                  conveniently order clothes from the comfort of your own home.
                </p>
              </div>
              <div className="portfolio_project-img">
                <img
                  src={projectThird1}
                  style={{ width: "290px", height: "429px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
