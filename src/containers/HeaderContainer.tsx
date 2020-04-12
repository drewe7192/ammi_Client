import React from "react";
import { MainGridHeader } from "./../views/mainGrid/MainGridContainer";

const whichGrid = (gridType: any) => {
  debugger;
  if ((gridType = "mainGrid")) {
    return (
      <>
        {" "}
        <MainGridHeader />
      </>
    );
  }
};
const HeaderContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default HeaderContainer;
