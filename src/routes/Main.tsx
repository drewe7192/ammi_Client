import React, { useState } from "react";
import { MainGridContainer } from "../views/mainGrid/MainGridContainer";
import { DashBoardGridContainer } from "../views/dashboardGrid/DashBoardGridContainer";
import BackgroundVideo from "../utils/backgroundVideo/BackgroundVideo";
import styles from "./../utils/backgroundVideo/BackgroundVideo.module.scss";
import "./Main.module.scss";

const Main = () => {
  const [whichGrid] = useState(false);

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
