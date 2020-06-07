import React, { useEffect, useState } from "react";
import styles from "./SpinnerPage.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import img from "./../../pictures/img_avatar.png";
import img2 from "./../../assets/pictures/naruto1.jpg";
import img3 from "./../../assets/pictures/fight2.png";
import img4 from "./../../assets/pictures/fight3.jpg";
import img5 from "./../../assets/pictures/fight4.jpg";
import { Loader } from "../../utils/Loader";
import MenuDropdownComponent from "../../utils/hamburger/MenuDropdownComponent";

export const SpinnerPageHeader = (props: any) => {
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

const MappingBody = (props: any) => {
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

export const SpinnerPageBody = (props: any) => {
  return (
    <>
      <div className={styles.verticalCenter}>
        <button>Centered Button</button>
      </div>
      <Loader isLoading={true} isTinted={true} />
      <div className={styles.footer}>
        <h6>#afdsf #hgh #hgfhfg #hg g #hgfhgfh #hgfh #gnfgg #hgfh #gnfgg</h6>
      </div>
    </>
  );
};

export const SpinnerPage = () => {
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  });

  const [isLoading, setisLoading] = useState(true);

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <HeaderContainer whichPage="spinnerPage" />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="spinnerPage" />
        </div>
      </div>
    </>
  );
};
