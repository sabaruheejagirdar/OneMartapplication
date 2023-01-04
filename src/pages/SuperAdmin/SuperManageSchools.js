import React from "react";
import CardList from "../../component/CardList/CardList";
import schools from "../../model/superadmin/schools.json";

const SuperManageSchools = () => {
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>schools</h1>
        <CardList propList={schools} />
      </div>
    </section>
  );
};

export default SuperManageSchools;
