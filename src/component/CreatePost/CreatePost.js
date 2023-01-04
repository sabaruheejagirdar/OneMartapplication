import React, { useEffect } from "react";
import { addPostSvc, hostName } from "../../constants/ApiEndPoints";

const CreatePost = () => {
  useEffect(() => {
    const url = hostName + addPostSvc;
    window.open(url, "_blank");
  }, []);
  return <></>;
};

export default CreatePost;
