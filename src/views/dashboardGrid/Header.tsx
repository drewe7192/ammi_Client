import React, { FC } from "react";
import styles from "./DashBoardGrid.module.scss";
import svg from "./../../icons/77_Essential_Icons_Users.svg";
import svg2 from "./../../icons/77_Essential_Icons_Notification.svg";
import svg3 from "./../../icons/77_Essential_Icons_Comment Lines.svg";
import MenuDropdownComponent from "./../../utils/Hamburger/MenuDropdownComponent"
import { Mapping } from "./../../utils/mapping/Mapping";

interface IHeaderProps
{
  frontItems: Array<string>
  hamburgerItems: Array<string>
}
const Header:FC<IHeaderProps> = (props: IHeaderProps) => {
  const { frontItems, hamburgerItems } = props
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeaderSection}>
        <div
          className="animeFont"
          style={{
            float: "left",
            fontSize: "4vh",
          }}
        >
          Ammi
        </div>
        <div style={{ padding: "1vh" }}>
          <img src={svg} alt="Ammi Logo One" style={{width: "4vw",height: "4vh",}}></img>
          <img src={svg2} alt="Ammi Logo Two" style={{ width: "4vw", height: "4vh" }}></img>
          <img src={svg3} alt="Ammi Logo Three" style={{ width: "4vw", height: "4vh" }}></img>
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
