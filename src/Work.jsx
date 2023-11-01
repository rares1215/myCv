import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";

export function Work() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div id="Work" className="work-container">
        <h2 className="work-title">This is some of my Work</h2>

        <Carousel data-aos="zoom-in" interval={null} className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="images/Work1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <a
                className="carousel-link"
                href="https://node-api2-ayq5.onrender.com"
              >
                Full project here
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="images/Work2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <a
                className="carousel-link"
                href="https://to-do-list-nq78.onrender.com"
              >
                Full project here
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img-big"
              src="https://mishpacha.com/wp-content/uploads/2022/07/So-You-Want-to-Be-a%E2%80%A6-Web-Developer-R.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="see-more-link">
                If you want to see the rest of my work you can click{" "}
                <a href="/AllMyWork"> here </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr></hr>
    </>
  );
}
