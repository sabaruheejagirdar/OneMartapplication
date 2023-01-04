import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogContext } from "../../context";
import { fetchUserRole } from "../../util/util";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LogContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 992) setToggle(false);
    });
    return window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 992) setToggle(false);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_role");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="navbar-container">
          <a href="/app#" className="navbar-brand">
            <img src="/app/asset/icons/logo.svg" />
          </a>
          <button
            className="nav-toggler"
            id="navToggler"
            onClick={() => setToggle(!toggle)}
          >
            <span className="burger-icon"></span>
          </button>
          {(toggle || width > 992) && (
            <div className="nav-collapse" id="navList">
              <ul className="nav-list">
                <li className="nav-item">
                  <a
                    onClick={() => setToggle(false)}
                    className="nav-link active"
                    href="/app#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setToggle(false)}
                    className="nav-link"
                    href="/app#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setToggle(false)}
                    className="nav-link"
                    href="/app#services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setToggle(false)}
                    className="nav-link"
                    href="/app#contact"
                  >
                    Contact
                  </a>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item">
                    <div className="dropdown">
                      <button className="dropbtn">My Profile</button>
                      <div className="dropdown-content">
                        <Link to={fetchUserRole()}>Profile</Link>
                        <Link to="/cart">My Cart</Link>
                        <Link to="/" onClick={handleLogout}>
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <>
                    <li className="nav-item d-flex">
                      <Link
                        onClick={() => setToggle(false)}
                        className="nav-link"
                        to="login"
                      >
                        <button type="button" className="btn btn-success">
                          Login
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item d-flex">
                      <Link
                        onClick={() => setToggle(false)}
                        className="nav-link"
                        to="register"
                      >
                        <button type="button" className="btn btn-warning">
                          Sign up
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
