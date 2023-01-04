import React, { useState } from "react";
import { useNavigate } from "react-router";
import LoadingButton from "../../common/LoadingButton";
import { registerClub } from "../../services/clubService";
import { alertMessage, getBase64 } from "../../util/util";

const CreateClub = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    owner: "",
    image: "",
  });

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const res = await registerClub(values, image);
    setLoading(false);
    alertMessage(res?.message);
    if (res?.success) {
      navigate("../");
    }
  };

  const handleChange = (event, prop) => {
    let val = event.target.value;
    setValues({ ...values, [prop]: val });
    if (prop === "image") {
      getBase64(event.target.files[0]).then((res) => setImage(res));
    }
  };

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
                    <span className="h1 fw-bold mb-0">Create Club</span>
                  </div>

                  <div className="form-control">
                    <input
                      value={values.name}
                      onChange={(e) => handleChange(e, "name")}
                      type="text"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the product name here..."
                    />
                    <label className="form-label">Product Name</label>
                  </div>

                  <div className="form-control">
                    <input
                      value={values.description}
                      onChange={(e) => handleChange(e, "description")}
                      type="text"
                      id="form2Example27"
                      className=""
                      placeholder="Enter the description here.."
                    />
                    <label className="form-label" for="form2Example27">
                      Product Description
                    </label>
                  </div>

                  <div className="form-control">
                    <input
                      onChange={(e) => handleChange(e, "image")}
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      placeholder="Upload Product Image.."
                    />
                    <label className="form-label" for="form2Example27">
                      Product Image
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <LoadingButton loading={loading} onClick={handleSubmit}>
                      Submit
                    </LoadingButton>
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

export default CreateClub;
