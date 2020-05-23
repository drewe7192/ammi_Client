import React, { useState } from "react";
import { MainGridHeader } from "../views/mainGrid/MainGridContainer";
import { DashboardGridHeader } from "./../views/dashboardGrid/DashBoardGridContainer";
import mockData from "./MockData.json";

const whichGrid = (props: any) => {
  var displayGrid;
  if (props.gridType == "dashBoardGrid") {
    displayGrid = (
      <DashboardGridHeader menuItems={mockData.results.Header.MenuItems} />
    );
  } else if (props.gridType == "mainGrid") {
    displayGrid = (
      <MainGridHeader menuItems={mockData.results.Header.MenuItems} />
    );
  }
  return <>{displayGrid} </>;
};

const HeaderContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default HeaderContainer;
