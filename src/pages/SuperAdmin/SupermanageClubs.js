import React from "react";
import CardList from "../../component/CardList/CardList";
import clubs from "../../model/superadmin/clubs.json";

const SuperManageClubs = () => {
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>clubs</h1>
        <CardList propList={clubs} />
      </div>
    </section>
  );
};

export default SuperManageClubs;
