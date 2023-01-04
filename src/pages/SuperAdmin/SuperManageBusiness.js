import React from "react";
import CardList from "../../component/CardList/CardList";
import business from "../../model/superadmin/business.json";

const SuperManageBusiness = () => {
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>business</h1>
        <CardList propList={business} />
      </div>
    </section>
  );
};

export default SuperManageBusiness;
