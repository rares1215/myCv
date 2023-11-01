import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export function Education() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const now1 = 90;
  const now2 = 50;
  const now3 = 50;
  const now4 = 40;

  const dataBaseIcon = (
    <FontAwesomeIcon icon={faDatabase} style={{ color: "#ffffff" }} />
  );
  const codeIcon = (
    <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff" }} />
  );

  const terminalIcon = (
    <FontAwesomeIcon icon={faTerminal} style={{ color: "#ffffff" }} />
  );

  const penIcon = (
    <FontAwesomeIcon icon={faPenFancy} style={{ color: "#ffffff" }} />
  );
  return (
    <>
      <h1
        id="Education"
        style={{ color: "white", textAlign: "center", marginTop: "10rem" }}
      >
        Education and Skills
      </h1>
      <div data-aos="fade-down" className="container experience-container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="number-styling">
              <h1 className="number">
                3<span className="dot-education"></span>
              </h1>
              <h3
                style={{
                  color: "white",
                  marginLeft: "2rem",
                  marginBottom: "1rem",
                }}
              >
                Certificates
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-mid-12 col-sm-12">
            <Carousel interval={null} className="education-carousel">
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Education1.jpg"
                  alt="Certificate 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Work1.png"
                  alt="Certificate 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="education-carousel-img"
                  src="images/Work1.png"
                  alt="Certificate 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <hr />

      <h2 className="education-title">My Skills</h2>

      <div
        data-aos="zoom-out"
        className="container text-center education-container"
      >
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {codeIcon} Front-End</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now1}
              label={`${now1}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {terminalIcon} Back-End</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now2}
              label={`${now2}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {dataBaseIcon} Data-Bases</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now3}
              label={`${now3}%`}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-12 col-sm-12 skill-col">
            <h4> {penIcon} Design</h4>
          </div>
          <div className="col col-lg-6 col-md-12 col-sm-12 progress-col">
            <ProgressBar
              variant="danger"
              animated
              now={now4}
              label={`${now4}%`}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
