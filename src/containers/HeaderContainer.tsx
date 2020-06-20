import React, { useState } from "react";
import { HomePageHeaderMobile } from "../views/homePage/HomePageMobile";
import { HomePageHeaderDesktop } from "../views/homePage/HomePageDesktop";
import { SpinnerPageHeaderMobile } from "../views/spinnerPage/SpinnerPageMobile";
import { SpinnerPageHeaderDesktop } from "../views/spinnerPage/SpinnerPageDesktop";
import { NewsPageHeaderMobile } from "../views/newsPage/NewsPageMobile";
import { NewsPageHeaderDesktop } from "../views/newsPage/NewsPageDesktop";
import { ProfilePageHeaderMobile } from "../views/profilePage/ProfilePageMobile";
import { ProfilePageHeaderDesktop } from "../views/profilePage/ProfilePageDesktop";
import mockData from "./MockData.json";
import { prependOnceListener } from "cluster";

const profilePage = (props: any) => {
  return props.isMobile ? (
    <ProfilePageHeaderDesktop menuItems={mockData.results.Header.MenuItems} />
  ) : (
    <ProfilePageHeaderMobile menuItems={mockData.results.Header.MenuItems} />
  );
};

const newsPage = (props: any) => {
  return props.isMobile ? (
    <NewsPageHeaderMobile menuItems={mockData.results.Header.MenuItems} />
  ) : (
    <NewsPageHeaderDesktop menuItems={mockData.results.Header.MenuItems} />
  );
};

const homePage = (props: any) => {
  return props.isMobile ? (
    <HomePageHeaderMobile menuItems={mockData.results.Header.MenuItems} />
  ) : (
    <HomePageHeaderDesktop menuItems={mockData.results.Header.MenuItems} />
  );
};

const spinnerPage = (props: any) => {
  return props.isMobile ? (
    <SpinnerPageHeaderMobile menuItems={mockData.results.Header.MenuItems} />
  ) : (
    <SpinnerPageHeaderDesktop menuItems={mockData.results.Header.MenuItems} />
  );
};

const whichGrid = (props: any) => {
  var displayGrid;
  if (props.whichPage == "spinnerPage") {
    displayGrid = spinnerPage(props);
  } else if (props.whichPage == "homePage") {
    displayGrid = homePage(props);
  } else if (props.whichPage == "newsPage") {
    displayGrid = newsPage(props);
  } else if (props.whichPage == "profilePage") {
    displayGrid = profilePage(props);
  }
  return <>{displayGrid} </>;
};

const HeaderContainer = (props: any) => {
  return <>{whichGrid(props)}</>;
};

export default HeaderContainer;
