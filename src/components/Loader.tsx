import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full bottom-0 z-50 bg-black flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
