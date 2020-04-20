import React from "react";
import styles from "./DashBoardGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import img from "./../../pictures/img_avatar.png";
import img2 from "./../../pictures/naruto1.jpg";
import img3 from "./../../pictures/fight2.png";
import img4 from "./../../pictures/fight3.jpg";
import img5 from "./../../pictures/fight4.jpg";
import Header from "./Header";
import SubHeader from "./SubHeader";

export const DashboardGridHeader = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      <div className={styles.dashboardHeaderContainer}>
        <Header frontItems={frontItems} hamburgerItems={hamburgerItems} />
        <div className={styles.dashboardSubheader}>
          <SubHeader />
        </div>
      </div>
    </>
  );
};

const MappingBody = (props: any) => {
  debugger;

  let NewsFeed = props.newsFeedItems.map((i: any, index: any) => {
    return (
      <>
        {" "}
        <div key={index} className={styles.bodyGridItem}>
          <div className={styles.card}>
            <div>
              <img
                src={img2}
                alt="Avatar"
                style={{ width: "25vw", height: "40vh" }}
              />
            </div>

            <div
              className={styles.cardContainer}
              style={{
                backgroundColor: "#9b470f",
                fontSize: "3vh",
                textAlign: "center",
                paddingTop: "7vh",
              }}
            >
              <h6>
                <b>{i.Title}</b>
              </h6>
              <div>{i.Subtitle}</div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return NewsFeed;
};

export const DashboardGridBody = (props: any) => {
  return (
    <>
      <div className={styles.bodyGridContainer}>{MappingBody(props)}</div>
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
