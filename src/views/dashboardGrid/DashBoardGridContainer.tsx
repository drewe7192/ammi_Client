import React from "react";
import styles from "./DashBoardGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
// import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";

export const DashboardGridHeader = () => {
  return (
    <>
      <div className={styles.dashboardHeaderContainer}>
        <div className={styles.dashboardHeaderItem}>1</div>
        <div className={styles.dashboardHeaderItem}>2</div>
      </div>
    </>
  );
};

export const DashboardGridBody = () => {
  return (
    <>
      {" "}
      <div className={styles.bodyGridContainer}>
        <div className={styles.bodyGridItem}>
          ayyy this is where the news feed going{" "}
        </div>
      </div>
    </>
  );
};

export const DashBoardGridContainer = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer gridType="dashBoardGrid" />
        </div>
        <div className={styles.gridItem}>
          {" "}
          <BodyContainer gridType="dashBoardGrid" />
        </div>
      </div>
    </>
  );
};
