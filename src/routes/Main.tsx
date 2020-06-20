import React, { useState, useEffect } from "react";
import HomePage from "../views/homePage/HomePage";
import SpinnerPage from "../views/spinnerPage/SpinnerPage";
import ProfilePage from "./../views/profilePage/ProfilePage";
import NewsPage from "../views/newsPage/NewsPage";
import BackgroundVideo from "../utils/backGroundVideo/BackgroundVideo";
import styles from "./../utils/backgroundVideo/BackgroundVideo.module.scss";
import "./Main.module.scss";
// import { Loader } from "./../utils/Loader";
import Video from "./../videos/test1.mp4";

const Main = () => {
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
      <SpinnerPage />
    </>
  );
};

export default Main;
