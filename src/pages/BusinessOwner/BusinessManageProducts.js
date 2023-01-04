import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllAddsById } from "../../services/addService";

const Adds = () => {
  const [adds, setAdds] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllAddsById(localStorage.getItem("user_id"));
      if (res) setDataLoading(false);
      setAdds(res);
    }
    fetchData();
  }, []);

  const ownerProduct = (adds) => adds.map((product) => product.acf);

  const onDelete = (index) => {
    const newList = list.filter((item, ind) => ind !== index);
    setList(newList);
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
            <h1>Explore Adds</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {ownerProduct(adds).map((item) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>${item.description}</h5>
                    <p
                      className="btn-remove"
                      onClick={(e) => onDelete(e, item)}
                    >
                      {" "}
                      <span className="btn2">Delete</span>
                    </p>
                  </div>
                </div>
              ))}
            </Loading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adds;
