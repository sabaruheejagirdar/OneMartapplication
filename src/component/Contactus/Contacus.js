import React from "react";
import contactImage from "./../../asset/icons/contact.svg";

const Contacus = () => {
  return (
    <div id="contact" style={{ backgroundColor: "#232659" }}>
      <div className="contact-container">
        <div className="contact-item">
          <img src={contactImage} alt="" />
        </div>
        <div className="contact-item">
          <div className="contact-header text-center">
            <div className="h3" style={{ color: "white" }}>
              Contact Form
            </div>
          </div>
          <div className="contact-form">
            <form action="#0">
              <div className="form-control">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                />
                <label for="name">Name</label>
              </div>

              <div className="form-control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"
                />
                <label for="email">Email Address</label>
                <div className="requirements">
                  Must be a valid email address.
                </div>
              </div>

              <div className="form-control">
                <textarea
                  id="message"
                  type="text"
                  placeholder="Message"
                  style={{ height: "10rem" }}
                ></textarea>
                <label for="password">Message</label>
                <div className="requirements">Message is required.</div>
              </div>

              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacus;
