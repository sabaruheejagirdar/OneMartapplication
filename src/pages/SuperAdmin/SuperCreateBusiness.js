import React from "react";

const SuperCreateBusiness = () => {
  return (
    <section style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="/app/asset/icons/login.svg"
                type="image/svg+xml"
                style={{ width: "100%" }}
              ></object>
            </div>
            <div className="card-item">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="heading">
                    <span className="h1 fw-bold mb-0">
                      Create New Business Profile
                    </span>
                  </div>

                  <div className="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the name here..."
                    />
                    <label className="form-label">Business Name</label>
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      id="form2Example27"
                      className=""
                      placeholder="Summarize here.."
                    />
                    <label className="form-label" for="form2Example27">
                      About
                    </label>
                  </div>

                  <div stye={{ marginBottom: "10px" }}>
                    <button className="login-button" type="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperCreateBusiness;
