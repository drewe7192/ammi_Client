import React, { useState } from "react";
import { MainGridBody } from "./../views/mainGrid/MainGridContainer";
import { DashboardGridBody } from "./../views/dashboardGrid/DashBoardGridContainer";

const whichGrid = (props: any) => {
  var displayGrid;
  if (props.gridType == "dashBoardGrid") {
    displayGrid = <DashboardGridBody />;
  } else if (props.gridType == "mainGrid") {
    displayGrid = <MainGridBody />;
  }
  return <>{displayGrid} </>;
};

const BodyContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default BodyContainer;
