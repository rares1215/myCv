import React from "react";
import { Navbarr } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Education } from "./Education";
import { Work } from "./Work";
import { Contact } from "./Contact";

function HomeRoute() {
  return (
    <>
      <Navbarr home="Home" />
      <Home />
      <About />
      <Education />
      <Work />
      <Contact />
    </>
  );
}
export default HomeRoute;
