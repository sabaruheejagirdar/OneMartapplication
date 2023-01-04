import { hostName, addSvc } from "../constants/ApiEndPoints";

export const registerAdd = async (values, image) => {
  const addUrl = hostName + addSvc;

  const eventObj = {
    acf: {
      ...values,
      image: image,
      owner: localStorage.getItem("user_id"),
    },
    title: values?.name,
    status: "publish",
  };
  const data = await fetch(addUrl, {
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

export const getAllAdds = async () => {
  const addUrl = hostName + addSvc;

  const data = await fetch(addUrl, {
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

export const getAllAddsById = async (id) => {
  const res = await getAllAdds();
  return res?.filter((product) => product?.acf?.owner === id);
};
