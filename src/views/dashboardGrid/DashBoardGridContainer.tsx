import React from "react";
import styles from "./DashBoardGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
// import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";
import img from "./../../pictures/img_avatar.png";

export const DashboardGridHeader = () => {
  return (
    <>
      <div className={styles.dashboardHeaderContainer}>
        <div className={styles.dashboardHeaderItem}>
          <div style={{ float: "left" }}>
            Ammi{" "}
            <input
              type="text"
              id="myInput"
              placeholder="Search for names.."
              title="Type in a name"
            ></input>
          </div>

          <div style={{ float: "right" }}>Tv,Movies,hamburger</div>
        </div>
        <div className={styles.dashboardHeaderItem2}>
          <div style={{ float: "left" }}>View All(4)...Close friends</div>

          <div style={{ float: "right" }}>
            Status{" "}
            <input
              type="text"
              id="myInput"
              placeholder="Search for names.."
              title="Type in a name"
            ></input>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export const DashboardGridBody = () => {
  return (
    <>
      <div className={styles.bodyGridContainer}>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className={styles.bodyGridItem}>
          <div className={styles.card}>
            <img
              src={img}
              alt="Avatar"
              style={{ width: "10vw", height: "20vh" }}
            />
            <div className={styles.cardContainer}>
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
