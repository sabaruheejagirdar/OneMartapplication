import React, { useEffect, useState } from "react";
import LoadingButton from "../../common/LoadingButton";
import { userRole } from "../../constants/constants";
import {
  deleteUser,
  getAllUsers,
  updateUserDetails,
  createUser,
} from "../../services/userService";
import { alertMessage } from "../../util/util";
import "./SuperManageSudents.css";

const SuperManage = ({ role, usertype }) => {
  const [users, setUsers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const [picture, setImage] = useState([]);
  const [values, setValues] = useState({
    id: "",
    name:"",
    email: "",
    password: "",
    dob: "",
    address:"",
    contact:"",
    usertype:usertype,
    userimage:"",
    role: [],
  });

  const onDelete = async (user) => {
    const newList = users.filter((item) => item.id !== user.id);
    setDataLoading(true);
    const res = await deleteUser(user.id);
    setDataLoading(false);
    alertMessage(res?.message);
    setUsers(newList);
  };

  const onUpdate = async (event) => {
    setDataLoading(true);
    let formData=new FormData();
    getAllData(formData)
    const res = await updateUserDetails(values);
    setDataLoading(false);
    alertMessage(res?.message);
    setEditing(false);
  };

  const getAllData=(formData)=>{
    formData.append("id",values.id)
    formData.append("name",values.name)
    formData.append("dob",values.dob)
    formData.append("address",values.address)
    formData.append("contact",values.contact)
    formData.append("email",values.email)
    formData.append("password",values.password)
    formData.append("userimage",picture.userimage)
    formData.append("usertype",values.usertype)
    console.log("picture",picture.userimage)
  }
  const onCreateUser = async (event) => {
    setDataLoading(true);
    let formData=new FormData();
    getAllData(formData)
    console.log(formData)
    const res = await createUser(formData);
    setDataLoading(true);
    alertMessage(res?.message);
    setEditing(false);
  };

  const onEdit = (user) => {
    setValues({
      ...values,
      ...user,
    });
    setEditing(true);
  };

  const onCancel = () => {
    const x = {
      username: "",
    id: "",
    name:"",
    email: "",
    password: "",
    dob: "",
    address:"",
    contact:"",
    usertype:usertype,
    userimage:"",
    role: [],
    }
    setValues({
      ...values,
      ...x,
    });
    setEditing(false);
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleChange = (event, prop) => {
    if (prop === "email") {
      event.target.style.background = isValidEmail(event.target.value)
        ? "#ffffff"
        : "#dc3545";
    }
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleImage = (event, prop) => {
      setImage({ ...values, [prop]: event.target.files[0] });
  };

  useEffect(() => {
    async function fetchData() {
      const res = await getAllUsers();
      if (res) setDataLoading(false);
      setUsers(res);
    }
    fetchData();
  }, [isEditing]);

  return (
    <div id="demo">
      <div class="container">
        <div className="table-responsive-vertical shadow-z-1">
          <h1 style={{ textTransform: "capitalize" }}>{userRole?.[role]}</h1>
          <LoadingButton
            isLoading={dataLoading}
            onClick={onCancel}
            sx={{ float: "right", margin: "10px" }}
          >
            Add User
          </LoadingButton>
          <table id="table" className="table table-hover table-mc-light-blue" >
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {users
                .sort((a, b) => a.id - b.id || a.name.localeCompare(b.name))
                .filter((user) => user.usertype === usertype)
                .map((user) => (
                  <tr>
                    {/* <td data-title="ID">{user.id}</td> */}
                    <td data-title="Name" style={{width:"10%"}}>{user.name}</td>
                    <td data-title="Link" style={{width:"10%"}}>{user.email}</td>
                    {/* <td data-title="Status">{userRole?.[user.role]}</td> */}
                    <td data-title="Link">{user.contact}</td>
                    <td data-title="Link">{user.address}</td>
                    <td data-title="Options" >
                      <i
                        className="fa fa-edit"
                        onClick={() => onEdit(user)}
                      ></i>
                      <i
                        className="fa fa-trash"
                        onClick={() => onDelete(user)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="edit-user" id="edit-user">
          <h1 style={{ textAlign: "start" }}>
            {isEditing ? `Editing ${values.name}` : "Create New"}
          </h1>
          <div className="card-item">
            <div className="card-body p-4 p-lg-5 text-black">
              <form  enctype="multipart/form-data">
                <div className="form-control">
                <label className="form-label">Name</label>
                  <input
                    value={values.name}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "name")}
                  />
                  
                </div>
                <div className="form-control">
                  {usertype == "S" ?
                <label className="form-label">DOB</label>:<label className="form-label">Date of Registration</label>}
                  <input
                    value={values.dob}
                    type="date"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "dob")}
                  />
                  
                </div>
                <div className="form-control">
                <label className="form-label">Address</label>
                  <input
                    value={values.address?values.address:""}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "address")}
                  />
                  
                </div>
                <div className="form-control">
                <label className="form-label">Contact</label>
                  <input
                    value={values.contact}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "contact")}
                  />
                  
                </div>
                <div className="form-control">
                <label className="form-label">Email Address</label>
                  <input
                    value={values.email}
                    type="mail"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "email")}
                  />
                  
                </div>

                {!isEditing && (
                  <div className="form-control">
                    <label className="form-label" for="form2Example27">
                      Password
                    </label>
                    <input
                      value={values.password}
                      type="password"
                      id="form2Example27"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    
                  </div>
                )}

              <div className="form-control">
                <label className="form-label">Upload Image</label>
                  <input
                    type="file"
                    id="form2Example17"
                    onChange={(e) => handleImage(e, "userimage")}
                  />
                  
                </div>
              </form>
            </div>
          </div>
          <div class="btn-wrapper">
            <LoadingButton
              isLoading={dataLoading}
              onClick={onCancel}
              sx={{ textAlign: "center", backgroundColor: "#dd7973" }}
            >
              Cancel
            
            </LoadingButton>
            {isEditing ?
              <LoadingButton
                isLoading={dataLoading}
                onClick={onUpdate}
                sx={{ textAlign: "center", backgroundColor: "#33b249" }}
              >
                Apply
            </LoadingButton> :
             <LoadingButton
               isLoading={dataLoading}
               onClick={onCreateUser}
               sx={{ textAlign: "center", backgroundColor: "#33b249" }}
             >
               Create
           </LoadingButton>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperManage;
