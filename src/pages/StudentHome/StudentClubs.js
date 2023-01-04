import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";

const StudentClubs = () => {
  return (
    <section class="vh-500" style={{ backgroundColor: "#232659" }}>
      <Sidebar />
      <div class="wrapper">
        <h1></h1>
        <div class="cart">
          <div class="cartproducts">
            <h1>Explore Clubs</h1>
            <div class="product">
              <div class="pdt_img">
                <img src="/app/asset/images/dataBreach.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Hackathon</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Join</span>
                </p>
              </div>
            </div>
            <div class="product">
              <div class="pdt_img">
                <img src="/app/asset/images/databaseTextbook.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Study Mate</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Join</span>
                </p>
              </div>
            </div>
          </div>

          <div class="price-details">
            <img src="/app/asset/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentClubs;
