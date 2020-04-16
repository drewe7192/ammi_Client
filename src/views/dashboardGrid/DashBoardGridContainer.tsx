import React from "react";
import styles from "./DashBoardGrid.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import img from "./../../pictures/img_avatar.png";
import svg from "./../../icons/77_Essential_Icons_Users.svg";
import svg2 from "./../../icons/77_Essential_Icons_Notification.svg";
import svg3 from "./../../icons/77_Essential_Icons_Comment Lines.svg";
import MenuDropdownComponent from "./../../utils/hamburger/MenuDropdownComponent";

const MenuItems_map = (array1: any) => {
  let test3;
  test3 = array1.map((i: any) => {
    return (
      <>
        <div className={styles.NavbargridItem}>{i}</div>
      </>
    );
  });

  return test3;
};

export const DashboardGridHeader = (props: any) => {
  let chuck = 3;

  let array1 = props.menuItems.slice(0, chuck);
  let array2 = props.menuItems.slice(chuck, chuck + props.menuItems.length);

  return (
    <>
      <div className={styles.dashboardHeaderContainer}>
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
            <img
              src={svg}
              style={{
                width: "4vw",
                height: "6vh",
              }}
            ></img>
            <img src={svg2} style={{ width: "4vw", height: "6vh" }}></img>
            <img src={svg3} style={{ width: "4vw", height: "6vh" }}></img>
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
              {MenuItems_map(array1)}
              <MenuDropdownComponent menuItemsForHamburger={array2} />
            </div>
          </div>
        </div>

        <div className={styles.dashboardSubheader}>
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
      {/* <div className={styles.bodyGridContainer}>
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
      </div> */}
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
