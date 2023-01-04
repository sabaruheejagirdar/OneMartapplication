import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardList = ({ propList, sell = false }) => {
  const [list, setList] = useState();
  const onDelete = (index) => {
    const newList = list.filter((item, ind) => ind !== index);
    setList(newList);
  };

  useEffect(() => {
    setList(propList);
  }, [propList]);

  return (
    <div className="cart">
      <div className="cartproducts">
        {list?.map((item, index) => (
          <div className="product">
            <div className="pdt_img">
              <img src={item.image} alt="ok" />
            </div>
            <div className="description">
              <h3>{item.name}</h3>
              <h4>{item?.description}</h4>
              <p className="btn-remove">
                {" "}
                <span className="btn2" onClick={() => onDelete(index)}>
                  DELETE
                </span>
              </p>
            </div>
          </div>
        ))}
        <div>
          <Link to={sell ? "sell" : "create"} className="view-more create-new">
            {sell ? "SELL" : "ADD"}
          </Link>
        </div>
      </div>

      <div className="price-details">
        <img src="/app/asset/images/waterbottle.jpg" alt="waterbottle" />
      </div>
    </div>
  );
};

export default CardList;
