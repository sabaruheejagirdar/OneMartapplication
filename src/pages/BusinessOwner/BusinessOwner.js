import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllAddsById } from "../../services/addService";
import { getAllPosts } from "../../services/postService";
import { getAllProductsById } from "../../services/productService";

const BusinessOwner = () => {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [adds, setAdds] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const getPostData = (list) =>
    list.filter((post) => post.author === localStorage.getItem("user_id"));

  const getProductData = (list) => list.map((item) => item?.acf);

  const getAddData = (list) => list.map((item) => item?.acf);

  useEffect(() => {
    async function fetchData() {
      setProducts(
        getProductData(
          await getAllProductsById(localStorage.getItem("user_id"))
        )
      );
      setPosts(getPostData(await getAllPosts()));
      setAdds(
        getAddData(await getAllAddsById(localStorage.getItem("user_id")))
      );
    }
    fetchData();
  }, []);

  return (
    <section>
      <div class="herosection" id="home">
        <div class="hero-container">
          <img
            src="/app/asset/images/starbucks-open.jpg"
            alt=""
            class="hero-image"
          />

          <div class="hero-content">
            <h1 class="display-1">
              One Shop <br /> for all your needs
            </h1>
          </div>
        </div>
      </div>

      <div class="outer-container" id="outer-container">
        <div class="left-side-container">
          <div class="card-heading">Products</div>
          <div class="productshome">
            <div class="card-container">
              {products.slice(0, 3).map((item) => (
                <div
                  class="card-item"
                  style={{
                    backgroundImage: `url(${
                      item?.image
                        ? item?.image
                        : "/app/asset/images/default-post.png"
                    })`,
                  }}
                >
                  <div class="card-content">
                    <h1>{item?.name}</h1>
                    <h4>{item?.description}</h4>
                  </div>
                </div>
              ))}
              <div class="view-more">
                <Link to="products">View More</Link>
              </div>
            </div>
          </div>

          <div class="card-heading">Posts</div>
          <div class="placeshome">
            <div class="card-container">
              {posts.slice(0, 3).map((item) => (
                <div
                  class="card-item"
                  style={{
                    backgroundImage: `url(${
                      item?.featured_image?.large
                        ? item?.featured_image?.large
                        : "/app/asset/images/default-post.png"
                    })`,
                  }}
                >
                  <div class="card-content">
                    <h1>{item?.title}</h1>
                    <h4
                      className="post-description"
                      dangerouslySetInnerHTML={{ __html: item?.content }}
                    ></h4>
                  </div>
                </div>
              ))}
              <div class="view-more">
                <Link to="posts">View More</Link>
              </div>
            </div>
          </div>

          <div class="card-heading">Advertisements</div>
          <div class="placeshome">
            <div class="card-container">
              {adds.slice(0, 3).map((item) => (
                <div
                  class="card-item"
                  style={{
                    backgroundImage: `url(${
                      item?.image
                        ? item?.image
                        : "/app/asset/images/default-post.png"
                    })`,
                  }}
                >
                  <div class="card-content">
                    <h1>{item?.name}</h1>
                    <h4>{item?.description}</h4>
                  </div>
                </div>
              ))}
              <div class="view-more">
                <Link to="adds">View More</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="right-side-container">
          <div class="advertisement">
            <img src="/app/asset/images/adbo1.jpg" alt="adbo" />
            <p> Grab your Deak NOW!! </p>
          </div>
          <div class="view-more advertise-btn">
            <a href="bocreateAdvertisement.html">Advertise</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOwner;
