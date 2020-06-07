import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent";
import Mapping from "../../utils/Mapping";

export const HomePageHeaderMobile = (props: any) => {
  let chuck = 3;

  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      {" "}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderItems}>Ammi</div>
        <div className={styles.mobileHeaderItems}>
          <MenuDropdownComponent menuItemsForHamburger={hamburgerItems} />
        </div>
      </div>
    </>
  );
};

export const HomePageBodyMobile = () => {
  return (
    <>
      <div className={styles.mobileBody}>
        <div className={styles.mobileBodyItem}>
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

export const HomePageMobile = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage={"homePage"} isMobile={true} />
        </div>
        <div className={styles.gridItem}>
          {" "}
          <BodyContainer whichPage={"homePage"} isMobile={true} />
        </div>
      </div>
    </>
  );
};
