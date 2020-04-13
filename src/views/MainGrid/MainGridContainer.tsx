import React, { useState } from "react";
import styles from "./MainGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";

const MenuItems_map = (array1: any) => {
  let test3;
  test3 = array1.map((i: any) => {
    return (
      <>
        <div className={styles.NavVargridItem}>{i}</div>
      </>
    );
  });

  return test3;
};
export const MainGridHeader = (props: any) => {
  let chuck = 3;

  let array1 = props.menuItems.slice(0, chuck);
  let array2 = props.menuItems.slice(chuck, chuck + props.menuItems.length);

  return (
    <>
      {" "}
      <div className={styles.mainGridHeader}>
        <div className={styles.title}>Ammi</div>
        <div className={styles.header}>
          <div className={styles.NavbargridContainer}>
            {/* <div className={styles.NavVargridItem}>TV</div>
            <div className={styles.NavVargridItem}>Manga</div>
            <div className={styles.NavVargridItem}>Movies</div> */}
            {MenuItems_map(array1)}
            <div>
              <MenuDropdownComponent menuItemsForHamburger={array2} />
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
