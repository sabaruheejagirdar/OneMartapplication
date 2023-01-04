import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { page } from "../../constants/constants";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (password === confirmPassword) {
      navigate("/login");
      console.log("success");
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("user_role");
    if (Object.keys(page).includes(role)) {
      navigate(page[role]);
    }
  });

  return (
    <section style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="./asset/icons/login.svg"
                type="image/svg+xml"
                style={{ width: "100%" }}
              ></object>
            </div>
            <div className="card-item">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="heading">
                    <span className="h1 fw-bold mb-0">Forgot password</span>
                  </div>

                  <div className="form-control">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="email"
                      id="form2Example17"
                      className=""
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-control">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="form2Example27"
                      className=""
                    />
                    <label className="form-label">Password</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      id="form2Example27"
                      className=""
                    />
                    <label className="form-label">Confirm Password</label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <button
                      className="login-button"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>

                  <a className="small" href="#!">
                    Forgot password?
                  </a>
                  <p style={{ color: "#393f81" }}>
                    Don't have an account?
                    <Link to="/register" style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                  </p>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
