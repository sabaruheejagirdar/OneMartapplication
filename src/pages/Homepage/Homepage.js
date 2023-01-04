import React from "react";
import About from "../../component/About/About";
import Contacus from "../../component/Contactus/Contacus";
import Herosection from "../../component/Herosection/Herosection";
import Navbar from "../../component/Navbar/Navbar";
import Services from "../../component/Services/Services";

const Homepage = () => {
  return (
    <div data-testid="home">
      <Herosection />
      <About />
      <Services />
      <Contacus />
    </div>
  );
};

export default Homepage;
