import React, { useState } from "react";
import { MainGridContainer } from "./../views/MainGrid/MainGridContainer";
import { DashBoardGridContainer } from "./../views/dashboardGrid/DashBoardGridContainer";
import BackgroundVideo from "../utils/BackgroundVideo/BackgroundVideo";
import styles from "./../utils/BackgroundVideo/BackgroundVideo.module.scss";
import "./Main.module.scss";

const Main = () => {
  const [whichGrid, setWhichGrid] = useState(false);
  console.dir(typeof setWhichGrid)
  // is this like a Route type thing???
  if (whichGrid) {
    return (
      <>
        {" "}
        <BackgroundVideo />{" "}
        <div className={styles.content}>
          <MainGridContainer />
        </div>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <BackgroundVideo />{" "}
        <div className={styles.content}>
          <DashBoardGridContainer />
        </div>
      </>
    );
  }
};

export default Main;
