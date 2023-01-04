import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = ({ isLoading, height, count = 1, children }) => {
  console.log(isLoading);
  return isLoading ? (
    <Skeleton
      height={height}
      count={count}
      baseColor="#cccccc"
      highlightColor="#7c76e8"
    />
  ) : (
    children
  );
};

export default Loading;
