import React from "react";
import styles from "./BodyGrid.module.scss";
import "./../../utils/BackGroundVideo/BackgroundVideo.module.scss";
import ModalComponent from "../../utils/modalComponent/ModalComponent";

const BodyGrid = () => {
  return (
    <>
      <div className={styles.bodygridContainer}>
        <div className={styles.bodygridItem}>
          <hr style={{ width: "70%" }} />
          <div style={{ paddingTop: "4vh" }}>
            <div
              style={{ fontSize: "7vh", color: "black", fontWeight: "bold" }}
            >
              The New 2020 Anime Spring Priview Guide{" "}
            </div>
            Check everyday for fresh takes about this seasons upcoming shows.
          </div>
          <div
            style={{
              fontSize: "2vh",
              paddingTop: "9vh",
              float: "left",
              paddingLeft: "9vh",
            }}
          >
            View
          </div>
        </div>
        <div className={styles.bodygridItem}></div>
      </div>
      <div className={styles.footer}>
        <div
          style={{
            fontSize: "2vh",
            float: "right",
            paddingLeft: "9vh",
          }}
        >
          dhdshcVKJDSHCJVKDHLVCKDKVC
        </div>
      </div>
    </>
  );
};

export default BodyGrid;
