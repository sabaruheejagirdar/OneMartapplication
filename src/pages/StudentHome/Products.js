import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import { getAllProducts } from "../../services/productService";
import { addToCart } from "../../state/slices/cartSlice";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await getAllProducts();
      if (res) setDataLoading(false);
      setProduct(res);
    }
    fetchData();
  }, []);

  const allProducts = (products) => products.map((product) => product.acf);

  const onBuyorReturn = (e, index) => {
    e.target.style.backgroundColor = "#aaaaaa";
    e.target.style.pointerEvents = "none";

    dispatch(addToCart(products[index]));
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
            <h1>Explore Products</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {allProducts(products).map((item, index) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                    <h5>${item.price}</h5>
                    <p
                      className="btn-remove"
                      onClick={(e) => onBuyorReturn(e, index)}
                    >
                      {" "}
                      <span className="btn2">BUY</span>
                    </p>
                  </div>
                </div>
              ))}
            </Loading>
            <div>
              <Link to="sell" className="view-more create-new">
                Sell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
