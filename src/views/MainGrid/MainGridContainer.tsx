import React from "react";
import styles from "./MainGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent.js";

export const MainGridHeader = () => {
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

export const MainGridBody = () => {
  return (
    <>
      <div className={styles.bodyGridContainer}>
        <div className={styles.bodyGridItem}>
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
        <div className={styles.bodyGridItem}></div>
      </div>
      <div className={styles.footer}></div>
    </>
  );
};

export const MainGridContainer = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer gridType={"mainGrid"} />
        </div>
        <div className={styles.gridItem}>
          {" "}
          <BodyContainer gridType={"mainGrid"} />
        </div>
      </div>
    </>
  );
};
