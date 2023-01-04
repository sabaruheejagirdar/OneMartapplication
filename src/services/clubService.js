import { hostName, clubsSvc,fetchAllClubs, deleteClubs } from "../constants/ApiEndPoints";
import axios from "axios";


export const registerClub = async (values, image) => {
  const clubUrl = hostName + clubsSvc;

  const eventObj = {
    title: values?.name,
    acf: {
      ...values,
      image: image,
      owner: localStorage.getItem("user_id"),
    },
    status: "publish",
  };
  console.log(eventObj);
  const data = await fetch(clubUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
    },
    body: JSON.stringify(eventObj),
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        success: true,
        message:
          data?.data?.status === 400
            ? "Invalid Parameter"
            : "Successfully created",
      };
    })
    .catch((error) => ({ success: false, message: "Error" }));
  return data;
};

export const getAllClubs1 = async () => {
  const clubUrl = hostName + clubsSvc;

  const data = await fetch(clubUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => response);
  return data;
};




export const getAllClubs = async (title, content) => {
  // const post = hostName + postsSvc;
  const fetchclubUrl = "http://localhost:8000" + fetchAllClubs;
  let data=[]
  const res = await axios.get(fetchclubUrl)
  .then((res) => {
      if(res.status === 200){
         data=res.data.clubs
      }
    })
    .catch((error) => console.log("Error"));
  return data;
};


export const deleteClub = async (index) =>{
  let data = []
  // const usersUrl = hostName + createUsers;
  const clubUrl = "http://localhost:8000" + deleteClubs +'/'+index.id ;
  const res = await axios.delete(clubUrl)
  .then((res) => {
      if(res.status === 200){
         data=res.data
      }
    })
    .catch((error) => console.log("Error"));
  return data;
}

export const getAllClubsById = async (id) => {
  const res = await getAllClubs();
  return res?.filter((club) => club?.acf?.owner === id);
};
