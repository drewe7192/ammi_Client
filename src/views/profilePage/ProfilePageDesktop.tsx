import React from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import styles from "./ProfilePage.module.scss";

export const ProfilePageHeaderDesktop = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      <div className={styles.desktopHeader}>
        <div className={styles.desktopHeaderSection}>Ammi</div>
        <div className={styles.desktopHeaderSection}>
          {/* <Mapping menuItems={props.menuItems} whichPage={"newsPage"} /> */}
        </div>
      </div>
    </>
  );
};

export const ProfilePageBodyDesktop = (props: any) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.bodyItem}>
          <div className={styles.card}>
            <img
              // src={img}
              alt="Avatar"
              style={{ width: "25vw", height: "25vh" }}
            ></img>
            <div className={styles.container}>
              <h4>
                <b>Josfdgfdgdfgdfgdfgdfge</b>
              </h4>
              <p>Argsdfgdfgdfgdfgfgfsdr</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyItem2}>
          <div className={styles.bodyItem2Columns}>
            <div className={styles.card}>
              <div className={styles.container}>
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
          <div className={styles.bodyItem2Columns}>
            <div className={styles.card}>
              <div className={styles.container}>
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProfilePageDesktop = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage="profilePage" isMobile={false} />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="profilePage" isMobile={false} />
        </div>
      </div>
    </>
  );
};
