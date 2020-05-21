import React, { useState, useEffect } from "react";
import { MainGridContainer } from "./../views/MainGrid/MainGridContainer";
import { DashBoardGridContainer } from "./../views/dashboardGrid/DashBoardGridContainer";
import BackgroundVideo from './../utils/BackGroundVideo/BackgroundVideo'
// import styles from "./../utils/BackgroundVideo/BackgroundVideo.module.scss";
// import styles from './../utils/BackGroundVideo/BackgroundVideo.module.scss'
import "./Main.module.scss"
import { Loader } from './../utils/Loader'

import Video from "./../videos/test1.mp4"
// import DevsVideo from "./../videos/Devs.mp4"

const Main = () => {

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })


  const [whichGrid, setWhichGrid] = useState(true);
  console.dir(typeof setWhichGrid)
  const [isLoading, setIsLoading] = useState(true)

  return <Loader isLoading={isLoading} isTinted={true}>
    {whichGrid ? <BackgroundVideo isMuted={true} isControlVisible={false} isLooped={true} src={Video} isFullScreen={true}/> : null}
    <div className='absolute content fullDim'>
      {whichGrid ? <MainGridContainer/> : <DashBoardGridContainer />}
    </div>
  </Loader>
};

export default Main;
