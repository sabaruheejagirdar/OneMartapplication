import { hostName, joinedSvc } from "../constants/ApiEndPoints";

export const joinClub = async (values) => {
  const orderUrl = hostName + joinedSvc;

  const eventObj = {
    acf: {
      ...values,
    },
    status: "publish",
  };
  const data = await fetch(orderUrl, {
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
          data?.data?.status === 400 ? "Invalid Parameter" : "Order Successful",
      };
    })
    .catch((error) => ({ success: false, message: "Error" }));
  return data;
};

export const getAllJoinedClubs = async (values) => {
  const orderUrl = hostName + joinedSvc;
  const data = await fetch(orderUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => ({ success: false, message: "Error" }));
  return data;
};

export const getAllJoinedClubsById = async () => {
  const res = await getAllJoinedClubs();
  return res.filter(
    (item) => item.acf.userid === localStorage.getItem("user_id")
  );
};
