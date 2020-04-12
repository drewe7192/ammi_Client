import React from "react";
import styles from "./DashBoardGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";

export const DashboardGridHeader = () => {
  return (
    <>
      {" "}
      <div className="" style={{ marginTop: "7vh" }}>
        <div
          style={{
            float: "left",
            paddingLeft: "5vw",
            color: "white",
            paddingTop: "2vh",
          }}
        >
          Ammi
        </div>
        <div className={styles.header} style={{ float: "right" }}>
          <div className={styles.NavbargridContainer}>
            <div className={styles.NavVargridItem}>Tv</div>
            <div className={styles.NavVargridItem}>Manga</div>
            <div className={styles.NavVargridItem}>Movies</div>
            <div>
              <MenuDropdownComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const DashboardGridBody = () => {
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
      <div className={styles.footer}></div>
    </>
  );
};

export const DashBoardGridContainer = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer gridType={"dashBoardGrid"} />
        </div>
        <div className={styles.gridItem}>
          {" "}
          <BodyContainer gridType={"dashBoardGrid"} />
        </div>
      </div>
    </>
  );
};
