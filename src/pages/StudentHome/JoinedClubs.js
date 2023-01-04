import React, { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import "react-loading-skeleton/dist/skeleton.css";
import moment from "moment";
import {
  getAllJoinedClubs,
  getAllJoinedClubsById,
} from "../../services/joinedService";
import { getAllClubs } from "../../services/clubService";

const JoinedClubs = () => {
  const [clubs, setClubs] = useState([]);
  const [joined, setJoined] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let res = await getAllJoinedClubsById(localStorage.getItem("user_id"));
      setJoined(res);
      res = await getAllClubs();
      setClubs(res);
      setDataLoading(false);
    }
    fetchData();
  }, []);

  const ownerClubs = (clubs) => clubs.map((club) => club.acf);

  const getClubsByJoined = () => {
    let finalJoinedClubs = [];
    joined?.forEach((order) => {
      clubs?.forEach((club) => {
        if (`${club.id}` === order.acf.clubid) {
          finalJoinedClubs.push({ ...club, date: order?.date });
        }
      });
    });
    return finalJoinedClubs;
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
            <h1>Joined Clubs</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {ownerClubs(getClubsByJoined()).map((item) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                    <p className="btn-remove">
                      {" "}
                      <span className="btn2">Leave</span>
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

export default JoinedClubs;
