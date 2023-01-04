import React from "react";

const LoadingButton = ({ loading, onClick, sx, children }) => {
  return (
    <button
      className={"login-button " + (loading ? "disabled" : "")}
      type="button"
      onClick={onClick}
      style={sx}
    >
      {children}
    </button>
  );
};
LoadingButton.defaultProps = {
  loading: false,
  onClick: () => console.log("click"),
  sx: {},
};

export default LoadingButton;
