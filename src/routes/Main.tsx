import React, { useState, useEffect } from "react";
import { MainGridContainer } from "../views/mainGrid/MainGridContainer";
import { DashBoardGridContainer } from "../views/dashboardGrid/DashBoardGridContainer";
import BackgroundVideo from "../utils/backgroundVideo/BackgroundVideo";
import styles from "./../utils/backgroundVideo/BackgroundVideo.module.scss";
import "./Main.module.scss";
// import { Loader } from "./../utils/Loader";

import Video from "./../videos/test1.mp4";

const Main = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 30000);
  });

  const [whichGrid, setWhichGrid] = useState(false);
  console.dir(typeof setWhichGrid);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* <Loader isLoading={isLoading} isTinted={true}>
        {whichGrid ? (
        <BackgroundVideo
          isMuted={true}
          isControlVisible={false}
          isLooped={true}
          src={Video}
          isFullScreen={true}
        />
      ) : null}
        <div className="absolute content fullDim">
        {whichGrid ? <MainGridContainer /> : <DashBoardGridContainer />}
      </div>
      </Loader> */}
      <DashBoardGridContainer />
    </>
  );
};

export default Main;
