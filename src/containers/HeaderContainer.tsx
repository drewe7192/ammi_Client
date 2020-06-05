import React, { useState } from "react";
import { HomePageHeader } from "../views/homePage/HomePage";
import { SpinnerPageHeader } from "../views/spinnerPage/SpinnerPage";
import { NewsPageHeader } from "../views/newsPage/NewsPageMobile";
import mockData from "./MockData.json";

const whichGrid = (props: any) => {
  var displayGrid;
  if (props.whichPage == "spinnerPage") {
    displayGrid = (
      <SpinnerPageHeader menuItems={mockData.results.Header.MenuItems} />
    );
  } else if (props.whichPage == "homePage") {
    displayGrid = (
      <HomePageHeader menuItems={mockData.results.Header.MenuItems} />
    );
  } else if (props.whichPage == "newsPage") {
    displayGrid = (
      <NewsPageHeader menuItems={mockData.results.Header.MenuItems} />
    );
  }
  return <>{displayGrid} </>;
};

const HeaderContainer = (whichPage: any) => {
  return <>{whichGrid(whichPage)}</>;
};

export default HeaderContainer;
