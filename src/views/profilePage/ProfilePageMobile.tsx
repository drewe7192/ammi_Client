import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent";
import styles from "./ProfilePage.module.scss";

export const ProfilePageHeaderMobile = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderSection}>
          <div
            style={{
              float: "left",
              fontSize: "4vh",
            }}
          >
            Ammi
          </div>
          <div style={{ padding: "1vh" }}>
            {/* <img
            src={svg}
            style={{
              width: "4vw",
              height: "4vh",
            }}
          ></img> */}
            {/* <img src={svg2} style={{ width: "4vw", height: "4vh" }}></img>
          <img src={svg3} style={{ width: "4vw", height: "4vh" }}></img> */}
          </div>
        </div>
        <div className={styles.mobileHeaderSection}>
          {/* <input
            type="search"
            id="myInput"
            placeholder="Search for Anime..."
            title="Type in a name"
          ></input> */}
        </div>
        <div className={styles.mobileHeaderSection}>
          <MenuDropdownComponent menuItemsForHamburger={hamburgerItems} />
        </div>
      </div>
    </>
  );
};

export const ProfilePageBodyMobile = () => {
  return (
    <>
      {" "}
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>hfghsggf</div>
        <div className={styles.gridItem}>hgfhdhgf</div>
      </div>
    </>
  );
};

export const ProfilePageMobile = () => {
  return (
    <>
      {" "}
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage="profilePage" isMobile={true} />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="profilePage" isMobile={true} />
        </div>
      </div>
    </>
  );
};
