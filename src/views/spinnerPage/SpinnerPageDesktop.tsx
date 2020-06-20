import React, { useEffect, useState } from "react";
import styles from "./SpinnerPage.module.scss";
import BodyContainer from "../../containers/BodyContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import img1 from "./../../assets/pictures/naruto1.jpg";
import { Loader } from "../../utils/Loader";

// const MappingBody = (props: any) => {
//   let NewsFeed = props.newsFeedItems.map((i: any, index: any) => {
//     return (
//       <>
//         {" "}
//         <div key={index} className={styles.bodyGridItem}>
//           <div className={styles.card}>
//             <div>
//               <img
//                 src={img1}
//                 alt="Avatar"
//                 style={{ width: "25vw", height: "40vh" }}
//               />
//             </div>

//             <div
//               className={styles.cardContainer}
//               style={{
//                 backgroundColor: "#9b470f",
//                 fontSize: "3vh",
//                 textAlign: "center",
//                 paddingTop: "7vh",
//               }}
//             >
//               <h6>
//                 <b>{i.Title}</b>
//               </h6>
//               <div>{i.Subtitle}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   });

//   return NewsFeed;
// };

export const SpinnerPageHeaderDesktop = (props: any) => {
  let chuck = 3;
  let frontItems = props.menuItems.slice(0, chuck);
  let hamburgerItems = props.menuItems.slice(
    chuck,
    chuck + props.menuItems.length
  );

  return (
    <>
      <div className={styles.desktopHeader}>
        <div className={styles.desktopHeaderSection}>1</div>
        <div className={styles.desktopHeaderSection}>
          vzdfvdfv
          {/* <input
            type="search"
            id="myInput"
            placeholder="Search for Anime..."
            title="Type in a name"
          ></input> */}
        </div>
        <div className={styles.desktopHeaderSection}>gsdfgdfgdfgd</div>
      </div>
    </>
  );
};

export const SpinnerPageBodyDesktop = (props: any) => {
  return (
    <>
      <button className={styles.buttonCenter}>Centered Button</button>
      <Loader isLoading={true} isTinted={true} isMobile={false} />

      <div className={styles.footer}>
        <h6>#afdsf #hgh #hgfhfg #hg g #hgfhgfh #hgfh #gnfgg #hgfh #gnfgg</h6>
      </div>
    </>
  );
};

export const SpinnerPageDesktop = () => {
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  });

  const [isLoading, setisLoading] = useState(true);

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem2}>
          <HeaderContainer whichPage="spinnerPage" />
        </div>
        <div className={styles.gridItem}>
          <BodyContainer whichPage="spinnerPage" />
        </div>
      </div>
    </>
  );
};
