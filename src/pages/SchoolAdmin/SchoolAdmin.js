import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllClubs } from "../../services/clubService";
import { getAllProducts } from "../../services/productService";
import { getAllUsers } from "../../services/userService";

const SuperAdmin = () => {
  const [users, setUsers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [products, setProducts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const userCount = (role) =>
    users?.filter((user) => user.role === role).length;

  useEffect(() => {
    async function fetchData() {
      setUsers(await getAllUsers());
      setProducts(await getAllProducts());
      setClubs(await getAllClubs());
    }
    fetchData();
  }, []);
  return (
    <div>
      <section>
        <div className="herosection" id="home">
          <div className="hero-container">
            <img
              src="/app/asset/icons/column-chart-example.svg"
              alt=""
              className="hero-image"
            />
            <div className="hero-rightside-admin">
              <div className="all-analytics">
                <h2>Total Number of Business owners</h2>
                <h2>{userCount("BO")}</h2>
              </div>
              <div className="all-analytics">
                <h2>Total Number of Clubs</h2>
                <h2>{products.length}</h2>
              </div>
              <div className="all-analytics">
                <h2>Total Number of Products</h2>
                <h2>{clubs.length}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="outer-container-admin" id="outer-container">
          <div className="manage-btn view-more">
            <Link to="posts">Manage Posts</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="clubs">Manage Clubs</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="students">Manage Students</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="business">Manage Businesses</Link>
          </div>
        </div>
      </section>

      <div className="fixed-bottom">
        <div className="chat">CHAT!!!</div>
      </div>
    </div>
  );
};

export default SuperAdmin;
