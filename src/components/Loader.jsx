import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      color="#00BFFF"
      height={80}
      width={80}
      alignItems="center"
      justifyContent="center"
      display="flex"
      textAlign="center"
    />
  );
};

export default Loader;
