import React from "react";
import styles from "./../../views/dashboardGrid/DashBoardGrid.module.scss";

const Mapping = (props: any) => {
  let items;
  items = props.menuItems.map((i: any) => {
    return (
      <>
        <div className={styles.NavbargridItem}>{i}</div>
      </>
    );
  });

  return items;
};

export default Mapping;
