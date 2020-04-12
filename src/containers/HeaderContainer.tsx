import React from "react";
import { MainGridHeader } from "./../views/mainGrid/MainGridContainer";
import { DashboardGridHeader } from "./../views/dashboardGrid/DashBoardGridContainer";

const whichGrid = (props: any) => {
  debugger;

  var loginButton;
  if (props.gridType == "dashBoardGrid") {
    loginButton = <DashboardGridHeader />;
  } else {
    loginButton = <MainGridHeader />;
  }

  return <>{loginButton} </>;
};
const HeaderContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default HeaderContainer;
