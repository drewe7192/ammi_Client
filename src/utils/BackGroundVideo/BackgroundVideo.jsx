import React from "react";
import styles from "./../BackGroundVideo/BackgroundVideo.module.scss";
import Video from "./../../videos/test1.mp4";

const BackgroundVideo = () => {
  return (
    <video loop autoPlay controls muted id={styles.myVideo}>
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag. I suggest you upgrade your
      browser.
    </video>
  );
};

export default BackgroundVideo;
