import React from "react";
import styles1 from "./../views/spinnerPage/SpinnerPage.module.scss";
import styles2 from "./../views/newsPage/NewsPage.module.scss";

const Mapping = (props: any) => {
  let items;
  items = props.menuItems.map((i: any) => {
    if (props.whichPage === "newsPage") {
      return (
        <>
          <div className={styles2.desktopHeaderSection}>{i}</div>
        </>
      );
    } else
      return (
        <>
          <div className={styles1.NavbargridItem}>{i}</div>
        </>
      );
  });

  return items;
};

export default Mapping;
