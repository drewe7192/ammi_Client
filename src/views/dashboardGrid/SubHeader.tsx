import React from "react";
import styles from "./DashBoardGrid.module.scss";

const SubHeader = () => {
  return (
    <>
      <div className={styles.SubHeaderGridItem} style={{ paddingTop: "1vh" }}>
        Ko'niciwa Samantha
      </div>
      <div className={styles.SubHeaderGridItem2} style={{ fontSize: "2.3vh" }}>
        <div className={styles.SubHeaderMiddleItem}>
          <div style={{ fontSize: "4vh", color: "orange" }}>17</div>
          <div>Mangas Read</div>
        </div>
        <div className={styles.SubHeaderMiddleItem}>
          <div style={{ fontSize: "4vh", color: "orange" }}>10</div>
          <div>Shows Watched</div>
        </div>
        <div className={styles.SubHeaderMiddleItem}>
          <div style={{ fontSize: "4vh", color: "orange" }}>3</div>
          <div>Movies viewed</div>
        </div>
        <div className={styles.SubHeaderMiddleItem}>
          <div style={{ fontSize: "4vh", color: "orange" }}>#</div>
          <div>AttackonTitan</div>
        </div>
        <div className={styles.SubHeaderMiddleItem}>
          {" "}
          <div style={{ fontSize: "4vh", color: "orange" }}>#</div>
          <div>Bleach</div>
        </div>
      </div>
      <div style={{ paddingTop: ".5vh" }} className={styles.SubHeaderGridItem}>
        Status:
        <input
          type="search"
          id="myInput"
          placeholder="Search for Anime..."
          title="Type in a name"
        ></input>
      </div>
    </>
  );
};

export default SubHeader;
