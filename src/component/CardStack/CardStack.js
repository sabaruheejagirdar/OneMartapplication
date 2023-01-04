import React from "react";
import "./../../";

const CardStack = (props) => {
  const { heading, list } = props;
  return (
    <div className="products">
      <div className="card-heading">{heading}</div>
      <div className="card-container">
        {list.slice(0, 3)?.map((item) => (
          <div
            className="card-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-content">
              <h1>{item.label}</h1>
              <h4>{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
