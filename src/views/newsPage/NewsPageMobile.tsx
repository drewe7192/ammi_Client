import React from "react";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent";
import styles from "./NewsPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import img from "./../../assets/pictures/fight2.png";

export const NewsPageHeader = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
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
        <div className={styles.dashboardHeaderSection}>
          <input
            type="search"
            id="myInput"
            placeholder="Search for Anime..."
            title="Type in a name"
          ></input>
        </div>
        <div className={styles.dashboardHeaderSection}>
          <MenuDropdownComponent menuItemsForHamburger={hamburgerItems} />
        </div>
      </div>
    </>
  );
};

export const NewsPageBodyMobile = (props: any) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.bodyItem}>1</div>
        <div className={styles.bodyItem}>
          <div className={styles.card}>
            <div className={styles.container}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyItem}>3</div>
        <div className={styles.bodyItem}>4</div>
        <div className={styles.bodyItem}>5</div>
        <div className={styles.bodyItem}>6</div>
        <div className={styles.bodyItem}>7</div>
        <div className={styles.bodyItem}>8</div>
        <div className={styles.bodyItem}>9</div>
      </div>
    </>
  );
};

export const NewsPageMobile = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage="newsPage" />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="newsPage" isMobile={true} />
        </div>
      </div>
    </>
  );
};
