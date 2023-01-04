import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-light">
      <div className="about-container">
        <div className="text-center">
          <h1 className="display-4">About us</h1>
          <p className="lead text-muted mb-0">One Shop for all your needs</p>
          <p className="lead text-muted">
            Click to
            <a href="#about" className="text-muted">
              <u>Learn More</u>
            </a>
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="about-container reverse">
        <div className="text-center">
          <p className="lead text-muted mb-0">One Shop for all your needs</p>
          <p className="lead text-muted">
            Click to
            <a href="#about" className="text-muted">
              <u>Learn More</u>
            </a>
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
