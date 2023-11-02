import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const linkedIn = (
    <FontAwesomeIcon
      icon={faLinkedin}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const twitter = (
    <FontAwesomeIcon
      icon={faTwitter}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const facebook = (
    <FontAwesomeIcon
      icon={faFacebook}
      beatFade
      size="2xl"
      style={{ color: "#ffffff" }}
    />
  );
  const phone = <FontAwesomeIcon icon={faPhone} shake />;
  const envelope = (
    <FontAwesomeIcon icon={faEnvelope} bounce style={{ color: "white" }} />
  );
  return (
    <>
      <div id="Contact" className="contact-container">
        <h1 className="contact-title">Contact me Here</h1>
        <div className="container text-center">
          <div data-aos="fade-right" className="row">
            <div className="col">
              <h5> {phone} 0734867957</h5>
              <h5> {envelope} raresgiurgescu@gmail.com</h5>
            </div>
            <div className="col">
              <a className="media-brand" href="">
                {facebook}
              </a>
              <a className="media-brand" href="">
                {twitter}
              </a>
              <a className="media-brand" href="">
                {linkedIn}
              </a>
            </div>
          </div>
        </div>
        <footer data-aos="fade-right">
          © Made by Giurgescu Rares-Alexandru
        </footer>
      </div>
    </>
  );
}
