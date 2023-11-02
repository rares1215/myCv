import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        id="About"
        className="container text-center about-container"
      >
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2>About myself</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              interdum velit laoreet id donec. Est ullamcorper eget nulla
              facilisi etiam dignissim. Et leo duis ut diam quam nulla porttitor
              massa. Id nibh tortor id aliquet lectus proin nibh nisl
              condimentum. Odio eu feugiat pretium nibh ipsum consequat. Aliquam
              faucibus purus in massa tempor nec feugiat. Leo urna molestie at
              elementum eu facilisis sed.{" "}
            </p>
          </div>
          <div className="col-lg-4">
            <h2>What can I Do</h2>
            <p>
              Nisi scelerisque eu ultrices vitae auctor eu augue ut. Pharetra et
              ultrices neque ornare aenean. Eu facilisis sed odio morbi quis
              commodo. Maecenas pharetra convallis posuere morbi leo. Dui sapien
              eget mi proin sed. Adipiscing elit pellentesque habitant morbi
              tristique senectus et netus et. Posuere morbi leo urna molestie.
              Volutpat diam ut venenatis tellus in metus vulputate. Congue
              quisque egestas diam in arcu cursus euismod quis. Arcu felis
              bibendum ut tristique et egestas.
            </p>
          </div>
          <div className="col-lg-4">
            <h2>Currently learning</h2>
            <p>Python and JavaScript</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
