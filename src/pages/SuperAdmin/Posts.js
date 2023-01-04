import React, { useEffect, useState } from "react";
import LoadingButton from "../../common/LoadingButton";
import { addPostSvc, hostName } from "../../constants/ApiEndPoints";
import { getAllPosts,deleteUser } from "../../services/postService";
import { Link } from "react-router-dom";
import { alertMessage } from "../../util/util";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const onDelete = async (item) => {
    const newList = posts.filter(post =>post.id!=item.id);
    const res = await deleteUser(item);
    alertMessage(res?.message);
    setPosts(newList);
  };


  const canDelete = (item) =>
    localStorage.getItem("user_role") === "superadmin" ||
    item?.author === localStorage.getItem("user_id");

  const getPostUrl = (slug) => `${hostName}/${slug}`;

  useEffect(() => {
    async function fetchData() {
      const res = await getAllPosts();
      setPosts(res);
    }
    fetchData();
  }, []);
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>Posts</h1>
        <div className="cart">
          <div className="cartproducts">
            {posts?.map((item, index) => (
              <div className="product" key={item.id}>
                <div className="pdt_img">
                  <img
                    src={
                      item.postimage?"http://localhost:8000/"+item.postimage
                        : "/app/asset/images/default-post.png"
                    }
                    alt="ok"
                  />
                </div>
                <div className="description">
                  <h3>{item.posttitle}</h3>
                  <h4 dangerouslySetInnerHTML={{ __html: item?.content }}></h4>
                </div>
                <div className="button-wrapper">
                <Link to="viewpost" className="view-more create-new">
                Read
              </Link>
                  {canDelete(item) && (
                    <LoadingButton
                      onClick={() => onDelete(item)}
                      sx={{ backgroundColor: "#dc3545" }}
                    >
                      Delete
                    </LoadingButton>
                  )}
                </div>
              </div>
            ))}
            
          </div>

          <div className="price-details">
            <img src="/app/asset/images/waterbottle.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
