import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { page } from "../../constants/constants";
import { singup } from "../../services/loginService";
import { alertMessage } from "../../util/util";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    dob: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleSignup = async (event) => {
    setLoading(true);
    const res = await singup(values);
    setLoading(false);
    if (res.success) {
      navigate("/login");
    }
    alertMessage(res?.message);
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
                data="/app/asset/icons/register.svg"
                type="image/svg+xml"
                style={{ width: "100%" }}
              ></object>
            </div>
            <div className="card-item">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="heading">
                    <span className="h1 fw-bold mb-0">Onemart</span>
                  </div>

                  <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>
                    Create your account
                  </h5>

                  <div className="form-control">
                    <input
                      value={values.username}
                      type="text"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "username")}
                    />
                    <label className="form-label">Username</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={values.name}
                      type="text"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "name")}
                    />
                    <label className="form-label">Name</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={values.dob}
                      type="date"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "dob")}
                    />
                    <label className="form-label">DOB</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={values.address}
                      type="text"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "address")}
                    />
                    <label className="form-label">Address</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={values.contact}
                      type="text"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "contact")}
                    />
                    <label className="form-label">Contact</label>
                  </div>
                  <div className="form-control">
                    <input
                      value={values.email}
                      type="mail"
                      id="form2Example17"
                      onChange={(e) => handleChange(e, "email")}
                    />
                    <label className="form-label">Email Address</label>
                  </div>

                  <div className="form-control">
                    <input
                      value={values.password}
                      type="password"
                      id="form2Example27"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <label className="form-label" for="form2Example27">
                      Password
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <button
                      className="login-button"
                      type="button"
                      onClick={handleSignup}
                    >
                      Sign up
                    </button>
                  </div>

                  <p style={{ color: "#393f81" }}>
                    Have an account?
                    <Link to="/login" style={{ color: "#393f81" }}>
                      Login here
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

export default Register;
