import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import styles from "./profile1Page.module.scss";

export const ProfilePageDesktop = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage="newsPage" />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="newsPage" isMobile={false} />
        </div>
      </div>
    </>
  );
};
