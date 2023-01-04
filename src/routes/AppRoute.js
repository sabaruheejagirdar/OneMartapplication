import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Alert from "../common/Alert";
import ProtectedRoute from "../common/ProtectedRoute";
import CreatePost from "../component/CreatePost/CreatePost";
import Navbar from "../component/Navbar/Navbar";
import Payment from "../component/Payment/Payment";
import { userRole } from "../constants/constants";
import BusinessManageAdds from "../pages/BusinessOwner/BusinessManageAdds";
import BusinessOwner from "../pages/BusinessOwner/BusinessOwner";
import Cart from "../pages/Cart/Cart";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SchoolAdmin from "../pages/SchoolAdmin/SchoolAdmin";
import JoinedClubs from "../pages/StudentHome/JoinedClubs";
import MyClubs from "../pages/StudentHome/MyClubs";
import MyPosts from "../pages/StudentHome/MyPosts";
import MyProducts from "../pages/StudentHome/MyProducts";
import Orders from "../pages/StudentHome/Orders";
import StudentHome from "../pages/StudentHome/StudentHome";
import Products from "../pages/StudentHome/Products";
import SuperAdmin from "../pages/SuperAdmin/SuperAdmin";
import ViewPost from "../pages/SuperAdmin/ViewPost"
import SuperCreateBusiness from "../pages/SuperAdmin/SuperCreateBusiness";
import SuperCreateSchools from "../pages/SuperAdmin/SuperCreateSchools";
import SuperCreateStudent from "../pages/SuperAdmin/SuperCreateStudent";
import SuperManageClubs from "../pages/SuperAdmin/SupermanageClubs";
import Posts from "../pages/SuperAdmin/Posts";

import Unathorised from "../pages/Unathorised/Unathorised";
import { fetchUserRole } from "../util/util";
import CreateProduct from "../pages/BusinessOwner/CreateProduct";
import CreateClub from "../pages/SuperAdmin/CreateClub";
import Clubs from "../pages/StudentHome/Clubs";
import SuperManage from "../pages/SuperAdmin/SuperManage";
import CreateAdd from "../pages/BusinessOwner/CreateAdd";

const AppRoute = () => {
  return (
    <BrowserRouter basename="app">
      <Navbar />
      <Alert />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="home" element={<Navigate replace to="/" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="superadmin">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.administrator}>
                <SuperAdmin />
              </ProtectedRoute>
            }
          />
          <Route path="business">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperManage role="contributor" usertype="BO"/>
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperCreateBusiness />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <Posts />
                </ProtectedRoute>
              }
            />
            <Route
              path="viewpost"
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <ViewPost />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <Clubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <CreateClub />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="schools">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperManage role="editor" usertype="SC" />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperCreateSchools />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="students">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperManage role="author" usertype="S"/>
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.administrator}>
                  <SuperCreateStudent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="schooladmin">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.editor}>
                <SchoolAdmin />
              </ProtectedRoute>
            }
          />
          <Route path="business">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.editor}>
                  <SuperManage role="contributor"  usertype="BO"/>
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.editor}>
                  <SuperCreateBusiness />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.editor}>
                  <Posts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.editor}>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.editor}>
                  <Clubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.editor}>
                  <CreateClub />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="students">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.editor} >
                  <SuperManage role="author"  usertype="S"/>
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.editor}>
                  <SuperCreateStudent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="businessowner">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.contributor}>
                <BusinessOwner />
              </ProtectedRoute>
            }
          />
          <Route path="products">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.contributor}>
                  <MyProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="sell"
              element={
                <ProtectedRoute role={userRole.contributor}>
                  <CreateProduct />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.contributor}>
                  <Posts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="adds">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.contributor}>
                  <BusinessManageAdds />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.contributor}>
                  <CreateAdd />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>

        <Route path="student">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.author}>
                <StudentHome />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="myposts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.author}>
                  <MyPosts />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.author}>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="myproducts"
            element={
              <ProtectedRoute role={userRole.author}>
                <MyProducts />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="myclubs"
            element={
              <ProtectedRoute role={userRole.author}>
                <MyClubs />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="orders"
            element={
              <ProtectedRoute role={userRole.author}>
                <Orders />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="products">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.author}>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="sell"
              element={
                <ProtectedRoute role={userRole.author}>
                  <CreateProduct />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.author}>
                  <Posts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.author}>
                  <CreatePost />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.author}>
                  <Clubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="joined"
              element={
                <ProtectedRoute role={userRole.author}>
                  <JoinedClubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.author}>
                  <CreateClub />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="forgot" element={<ForgotPassword />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute role={fetchUserRole()}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="payment"
          element={
            <ProtectedRoute role={fetchUserRole()}>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Unathorised />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
