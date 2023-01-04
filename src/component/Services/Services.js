import React from "react";
import exchange from "./../../asset/icons/service-exchange.svg";
import club from "./../../asset/icons/service-club.svg";
import books from "./../../asset/icons/service-books.svg";

const Services = () => {
  return (
    <div id="services">
      <div className="service-container">
        <div className="services-wrapper" style={{ padding: "30px 0" }}>
          <h1 className="header">Services</h1>
          <div className="card-stack">
            <div className="card-item">
              <img src={exchange} alt="" className="" />
              <h1>Exchanging information with your peer</h1>
              <p>Exchanging information with your peer</p>
            </div>
            <div className="card-item">
              <img src={club} alt="" className="" />
              <h1>Checkout the clubs in the campus</h1>
              <p>Checkout the clubs in the campus</p>
            </div>
            <div className="card-item">
              <img src={books} alt="" className="" />
              <h1>Trade books and other things with your peers</h1>
              <p>Trade books and other things with your peers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
