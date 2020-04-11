import React from "react";
import "./MainGrid.css";
import BodyContainer from "./../../containers/BodyContainer";
import HeaderContainer from "./../../containers/HeaderContainer";

const MainGrid = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <HeaderContainer />
        </div>
        <div className="grid-item">
          {" "}
          <BodyContainer />
        </div>
      </div>
    </>
  );
};

export default MainGrid;
