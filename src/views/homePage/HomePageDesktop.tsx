import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent";
import Mapping from "../../utils/Mapping";
import BackgroundVideo from "./../../utils/backGroundVideo/BackgroundVideo";
import Video from "./../../assets/videos/test1.mp4";

export const HomePageHeaderDesktop = (props: any) => {
  let chuck = 3;

  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      {" "}
      <div className={styles.mainGridHeader}>
        <div className={styles.title}>Ammi</div>
        <div className={styles.header}>
          <div className={styles.NavbargridContainer}>
            <Mapping menuItems={frontItems} />
            <div>
              <MenuDropdownComponent menuItemsForHamburger={hamburgerItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const HomePageBodyDesktop = () => {
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

export const HomePageDesktop = () => {
  return (
    <>
      {/* <BackgroundVideo /> */}
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage={"homePage"} />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage={"homePage"} />
        </div>
      </div>
    </>
  );
};
