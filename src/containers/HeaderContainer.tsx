import React, { useState } from "react";
import { HomePageHeader } from "../views/homePage/HomePage";
import { SpinnerPageHeader } from "../views/spinnerPage/SpinnerPage";
import mockData from "./MockData.json";

const whichGrid = (props: any) => {
  var displayGrid;
  if (props.gridType == "spinnerPage") {
    displayGrid = (
      <SpinnerPageHeader menuItems={mockData.results.Header.MenuItems} />
    );
  } else if (props.gridType == "homePage") {
    displayGrid = (
      <HomePageHeader menuItems={mockData.results.Header.MenuItems} />
    );
  }
  return <>{displayGrid} </>;
};

const HeaderContainer = (gridType: any) => {
  return <>{whichGrid(gridType)}</>;
};

export default HeaderContainer;
