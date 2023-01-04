import { hostName, loginSvc, registerSvc , createUsers} from "../constants/ApiEndPoints";
import { userRole } from "../constants/constants";
import axios from "axios";

export const login = async (username, password, admin) => {
  const loginUrl = hostName + loginSvc;
  const payload = {
    username: username,
    password: password,
  };
  let data = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.token) {
        if (!admin) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user_role", userRole[res.user_role[0]]);
          localStorage.setItem("user_id", res.id);
        } else {
          localStorage.setItem("admin_token", res.token);
        }
        // navigate(page[res.user_role]);
        return {
          success: true,
          message: "Logged in Successfully",
        };
      }
      if (res?.data?.status === 403) {
        return {
          success: false,
          message: res?.message,
        };
      }
      return {
        success: false,
        message: "Error",
      };
    });
  return data;
};

export const singup = async (body) => {
  const userObj = {
    username: body.username,
    first_name: body.name,
    email: body.email,
    password: body.password,
    roles: ["author"],
    acf: {
      dob: body.dob,
      address: body.address,
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
  };
  const token = localStorage.getItem("admin_token");
  const registerUrl = hostName + registerSvc;
  const data = await fetch(registerUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (
        res?.data?.status === 400 ||
        res?.code === "existing_user_login" ||
        res?.code === "existing_user_email"
      ) {
        return {
          success: false,
          message: res?.message,
        };
      } else {
        return {
          success: true,
          message: "User created successfully",
        };
      }
    })
    .catch((err) => err);
  return data;
};

export const isUserLoggedIn = () => localStorage.getItem("user_role");


export const singup1 = async (values) => {
  // const usersUrl = hostName + createUsers;
  const usersUrl = "http://localhost:8000" + createUsers;
  let data = await axios.post(usersUrl, values)
  .then((res) => {
    if(res.status === 200){
      return {
        success: true,
        message: "User created successfully",
      };
    }
  })
  .catch((error) => console.log("Error"));
return data;
};

