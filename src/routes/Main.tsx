import React from "react";
import MainGrid from "./../views/MainGrid/MainGrid";
import "./Main.css";
import BackgroundVideo from "../utils/BackGroundVideo/BackgroundVideo";
import "../utils/BackGroundVideo/BackgroundVideo.css";

const Main = () => {
  return (
    <>
      {" "}
      <BackgroundVideo />{" "}
      <div className="content">
        <MainGrid />
      </div>
    </>
  );
};

export default Main;
