import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";

const StudentPosts = () => {
  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />
      <div className="wrapper">
        <h1></h1>
        <div className="cart">
          <div className="cartproducts">
            <h1>Explore Posts</h1>
            <div className="product">
              <div className="pdt_img">
                <img src="/app/asset/images/dataBreach.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Data Breach</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/app/asset/images/lifeSciences.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Life Sciences</h3>
                <p className="btn-remove">
                  {" "}
                  <span class="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/app/asset/images/halloween.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Halloween</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/app/asset/images/bigdata.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Big Data</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div className="price-details">
            <img src="/app/asset/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPosts;
