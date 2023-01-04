import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllAddsById } from "../../services/addService";
import { Link } from "react-router-dom";

const Adds = () => {
  const [adds, setAdds] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllAddsById(localStorage.getItem("user_id"));
      if (res) setDataLoading(false);
      setAdds(ownerProduct(res));
    }
    fetchData();
  }, []);

  const ownerProduct = (obj) => obj.map((product) => product.acf);

  const onDelete = (item) => {
    console.log(item, adds);
    const newList = adds.filter((add) => add.owner !== item.owner);
    setAdds(newList);
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
              {adds.map((item) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                    <p className="btn-remove" onClick={() => onDelete(item)}>
                      {" "}
                      <span className="btn2">Delete</span>
                    </p>
                  </div>
                </div>
              ))}
            </Loading>
          </div>
        </div>
        <div>
          <Link to="create" className="view-more create-new">
            Create
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Adds;
