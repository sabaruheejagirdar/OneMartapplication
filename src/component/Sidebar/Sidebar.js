import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogContext } from "../../context";
import { fetchUserRole } from "../../util/util";
import "./Sidebar.css";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LogContext);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    localStorage.getItem("user_role") === "student" && (
      <>
        <div className="area"></div>
        <nav className="main-menu">
          <ul>
            <li>
              <Link to="/">
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/student">
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text">Explore</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/student/myproducts">
                <i className="fa fa-box-open fa-2x"></i>
                <span className="nav-text">My Products</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/student/myclubs">
                <i className="fa fa-user fa-2x"></i>
                <span className="nav-text">My Clubs</span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="/student/clubs/joined">
                <i className="fa fa-users fa-2x"></i>
                <span className="nav-text">Joined Clubs</span>
              </Link>
            </li>
            <li>
              <Link to="/student/myposts">
                <i className="fa fa-file fa-2x"></i>
                <span className="nav-text">My Posts</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa fa-shopping-cart fa-2x"></i>
                <span className="nav-text">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/student/orders">
                <i className="fa fa-history fa-2x"></i>
                <span className="nav-text">Orders</span>
              </Link>
            </li>
          </ul>

          <ul className="logout">
            <li>
              <a onClick={() => handleLogout()}>
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  );
};

export default Sidebar;
