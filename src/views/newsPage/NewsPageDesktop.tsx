import React from "react";
import styles from "./NewsPage.module.scss";
import HeaderContainer from "../../containers/HeaderContainer";
import BodyContainer from "../../containers/BodyContainer";
import Mapping from "./../../utils/Mapping";
import img from "./../../assets/pictures/naruto1.jpg";

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
        <div className={styles.desktopHeaderSection}>Ammi</div>
        <div className={styles.desktopHeaderSection}>
          <Mapping menuItems={props.menuItems} whichPage={"newsPage"} />
        </div>
      </div>
    </>
  );
};

export const NewsPageBodyDesktop = (props: any) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.bodyItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "25vw", height: "25vh" }}
            ></img>
            <div className={styles.container}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
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
