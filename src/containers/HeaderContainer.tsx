import React, { useState } from "react";
import { HomePageHeader } from "../views/homePage/HomePage";
import { SpinnerPageHeader } from "../views/spinnerPage/SpinnerPage";
import { NewsPageHeaderMobile } from "../views/newsPage/NewsPageMobile";
import { NewsPageHeaderDesktop } from "../views/newsPage/NewsPageDesktop";
import mockData from "./MockData.json";
import { prependOnceListener } from "cluster";

const newsPage = (props: any) => {
  return props.isMobile ? (
    <NewsPageHeaderMobile menuItems={mockData.results.Header.MenuItems} />
  ) : (
    <NewsPageHeaderDesktop menuItems={mockData.results.Header.MenuItems} />
  );
};

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
    displayGrid = newsPage(props);
  }
  return <>{displayGrid} </>;
};

const HeaderContainer = (props: any) => {
  return <>{whichGrid(props)}</>;
};

export default HeaderContainer;
