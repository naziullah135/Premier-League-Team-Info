import React from "react";
import banner from "../../images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-div">
      <img style={{ width: "100%" }} src={banner} alt="" />
    </div>
  );
};

export default Banner;
