import React, { useEffect, useRef } from "react";

const styles = {
  position: "fixed",
  width: "400px",
  margin: "auto",
  top: "100px",
  left: "calc(50% - 200px)",
  background: "#1c9027",
  padding: "15px 20px",
  display: "none",
};

const Alert = () => {
  const ref = useRef();
  const conditions = ["Error", "Invalid", "Sorry"];
  useEffect(() => {
    window.addEventListener("alert", setAlert);
  });
  const setAlert = (e) => {
    if (ref?.current) {
      ref.current.innerHTML = e.detail;
      ref.current.style.display = "block";

      ref.current.style.background = conditions.some((el) =>
        e.detail?.includes(el)
      )
        ? "#dc3545"
        : "#1c9027";

      setTimeout(() => {
        ref.current.style.display = "none";
      }, 5000);
    }
  };
  return <div ref={ref} className="alert-container" style={styles}></div>;
};

export default Alert;
