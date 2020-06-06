import React from "react";
import styles from "./NewsPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import Mapping from "./../../utils/Mapping";

export const NewsPageHeaderDesktop = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      <div className={styles.desktopHeader}>
        <Mapping menuItems={props.menuItems} whichPage={"newsPage"} />
        {/* <div className={styles.desktopHeaderSection}>Ammi</div>
        <div className={styles.desktopHeaderSection}>vfsdgvdfgfdgdfgf</div>
        <div className={styles.desktopHeaderSection}>ghfghghg</div> */}
      </div>
    </>
  );
};

export const NewsPageBodyDesktop = (props: any) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.bodyItem}>1</div>
        <div className={styles.bodyItem}>
          <div className={styles.card}>
            {/* <img
              src={img}
              alt="Avatar"
              style={{ width: "25vw", height: "25vh" }}
            ></img> */}
            <div className={styles.container}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const NewsPageDesktop = () => {
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
