import React from "react";

const Loading = () => {
  return (
    <img
      className="loading"
      src={process.env.PUBLIC_URL + "/image/loading.png"}
    />
  );
};

export default Loading;
