import React from "react";
import MenuDropdownComponent from "../../utils/Hamburger/MenuDropdownComponent.js";
import styles from "./HeaderGrid.module.scss";

const HeaderGrid = () => {
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

export default HeaderGrid;
