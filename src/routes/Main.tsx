import React from "react";
import MainGrid from "./../views/MainGrid/MainGrid";
import "./Main.module.scss";
import BackgroundVideo from "../utils/BackGroundVideo/BackgroundVideo";
import styles from "../utils/BackGroundVideo/BackgroundVideo.module.scss";

const Main = () => {
  return (
    <>
      {" "}
      <BackgroundVideo />{" "}
      <div className={styles.content}>
        <MainGrid />
      </div>
    </>
  );
};

export default Main;
