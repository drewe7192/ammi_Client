import React from "react";
import styles from "./DashBoardGrid.module.scss";
import svg from "./../../icons/77_Essential_Icons_Users.svg";
import svg2 from "./../../icons/77_Essential_Icons_Notification.svg";
import svg3 from "./../../icons/77_Essential_Icons_Comment Lines.svg";
import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";
import Mapping from "./../../utils/mapping/Mapping";

const Header = (props: any) => {
  let frontItems = props.frontItems;
  let hamburgerItems = props.hamburgerItems;

  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeaderSection}>
        <div
          style={{
            float: "left",
            fontSize: "4vh",
          }}
        >
          Ammi
        </div>
        <div style={{ padding: "1vh" }}>
          <img
            src={svg}
            style={{
              width: "4vw",
              height: "4vh",
            }}
          ></img>
          {/* <img src={svg2} style={{ width: "4vw", height: "4vh" }}></img>
          <img src={svg3} style={{ width: "4vw", height: "4vh" }}></img> */}
        </div>
      </div>
      <div className={styles.dashboardHeaderSection}>
        <input
          type="search"
          id="myInput"
          placeholder="Search for Anime..."
          title="Type in a name"
        ></input>
      </div>
      <div className={styles.dashboardHeaderSection}>
        <div className={styles.NavbargridContainer}>
          <Mapping menuItems={frontItems} />
          <MenuDropdownComponent menuItemsForHamburger={hamburgerItems} />
        </div>
      </div>
    </div>
  );
};

export default Header;
