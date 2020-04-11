import React from "react";
import styles from "./MainGrid.module.scss";
import BodyContainer from "./../../containers/BodyContainer";
import HeaderContainer from "./../../containers/HeaderContainer";

const MainGrid = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer />
        </div>
        <div className={styles.gridItem}>
          {" "}
          <BodyContainer />
        </div>
      </div>
    </>
  );
};

export default MainGrid;
