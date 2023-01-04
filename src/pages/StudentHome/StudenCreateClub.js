import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";

const StudenCreateClub = () => {
  return (
    <section style={{ backgroundColor: "#232659" }}>
      <Sidebar />

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
                    <span className="h1 fw-bold mb-0">Create New CLUB</span>
                  </div>

                  <div className="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the clubname here..."
                    />
                    <label className="form-label">Club Name</label>
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the club details..."
                    />
                    <label className="form-label">Club Summary</label>
                  </div>
                  <div className="form-control">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      placeholder="Upload Club Image.."
                    />
                    <label className="form-label" for="form2Example27">
                      Club Image
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
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

export default StudenCreateClub;
