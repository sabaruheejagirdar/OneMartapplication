import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllClubs } from "../../services/clubService";
import LoadingButton from "../../common/LoadingButton";
import { Link } from "react-router-dom";
import { joinClub } from "../../services/joinedService";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const dispatch = useDispatch();

  const onDelete = (index) => {
    const newList = clubs.filter((item, ind) => ind !== index);
    setClubs(newList);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getAllClubs();
      if (res) setDataLoading(false);
      setClubs(res);
    }
    fetchData();
  }, []);

  const canDelete = (item) =>
    localStorage.getItem("user_role") === "superadmin" ||
    localStorage.getItem("user_role") === "schooladmin" ||
    item?.author === localStorage.getItem("user_id");

  const canJoin = (item) => localStorage.getItem("user_role") === "student";

  const onJoined = async (index) => {
    const res = await joinClub({
      userid: localStorage.getItem("user_id"),
      clubid: `${clubs[index]?.id}`,
    });
  };

  const allProducts = (clubs) => clubs.map((club) => club.acf);

  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>Clubs</h1>
        <div className="cart">
          <div className="cartproducts">
            {clubs?.map((item, index) => (
              <div className="product" key={item.id}>
                <div className="pdt_img">
                <img
                    src={
                      item.clubimage?"http://localhost:8000/"+item.clubimage
                        : "/app/asset/images/default-post.png"
                    }
                    alt="ok"
                  />
                </div>
                <div className="description">
                  <h3>{item.clubname}</h3>
                  <h4
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></h4>
                </div>
                <div className="button-wrapper">
                  {canJoin() && (
                    <LoadingButton onClick={() => onJoined(index)}>
                      Join
                    </LoadingButton>
                  )}

                  {canDelete(item) && (
                    <LoadingButton
                      isLoading={dataLoading}
                      onClick={() => onDelete(index)}
                      sx={{ backgroundColor: "#dc3545" }}
                    >
                      Delete
                    </LoadingButton>
                  )}
                </div>
              </div>
            ))}
            <div>
              <Link to="create" className="view-more create-new">
                Add new
              </Link>
            </div>
          </div>

          <div className="price-details">
            <img src="/app/asset/images/waterbottle.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
