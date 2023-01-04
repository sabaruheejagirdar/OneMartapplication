import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllClubsById } from "../../services/clubService";
import { Link } from "react-router-dom";

const Products = () => {
  const [clubs, setClubs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await getAllClubsById(localStorage.getItem("user_id"));
      if (res) setDataLoading(false);
      setClubs(res);
    }
    fetchData();
  }, []);

  const ownerProduct = (clubs) => clubs.map((product) => product.acf);

  const onDelete = (index) => {
    const newList = clubs.filter((item, ind) => ind !== index);
    setClubs(newList);
  };

  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />
      <div className="wrapper">
        <div className="cart">
          <div className="cartproducts">
            <h1>My Clubs</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {ownerProduct(clubs).map((item, index) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                    <p className="btn-remove" onClick={() => onDelete(index)}>
                      {" "}
                      <span className="btn2">Delete</span>
                    </p>
                  </div>
                </div>
              ))}
            </Loading>
            <div>
              <Link to="../clubs/create" className="view-more create-new">
                Add new
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
