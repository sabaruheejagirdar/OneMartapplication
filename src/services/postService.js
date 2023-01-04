import { postsSvc, hostName ,fetchAllPosts,deletePost} from "../constants/ApiEndPoints";
import axios from "axios";

export const getAllPosts1 = async (title, content) => {
  const post = hostName + postsSvc;
  const data = await fetch(post, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return data;
};


export const getAllPosts = async (title, content) => {
  // const post = hostName + postsSvc;
  const fetchpostUrl = "http://localhost:8000" + fetchAllPosts;
  let data=[]
  const res = await axios.get(fetchpostUrl)
  .then((res) => {
      if(res.status === 200){
         data=res.data.posts
      }
    })
    .catch((error) => console.log("Error"));
  return data;
};


export const deleteUser = async (index) =>{
  let data = []
  // const usersUrl = hostName + createUsers;
  const postUrl = "http://localhost:8000" + deletePost +'/'+index.id ;
  const res = await axios.delete(postUrl)
  .then((res) => {
      if(res.status === 200){
         data=res.data
      }
    })
    .catch((error) => console.log("Error"));
  return data;
}

export const getAllPostsById = async (id) => {
  const res = await getAllPosts();
  return res?.filter((item) => item?.author === id);
};