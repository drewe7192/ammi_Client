import React, { useState } from "react";
import { HomePageBodyMobile } from "../views/homePage/HomePageMobile";
import { HomePageBodyDesktop } from "../views/homePage/HomePageDesktop";
import { SpinnerPageBodyMobile } from "../views/spinnerPage/SpinnerPageMobile";
import { SpinnerPageBodyDesktop } from "../views/spinnerPage/SpinnerPageDesktop";
import { NewsPageBodyMobile } from "../views/newsPage/NewsPageMobile";
import { NewsPageBodyDesktop } from "../views/newsPage/NewsPageDesktop";
import mockData from "./MockData.json";
import { prependOnceListener } from "cluster";

const NewsPage = (props: any) => {
  return props.isMobile ? <NewsPageBodyMobile /> : <NewsPageBodyDesktop />;
};

const homePage = (props: any) => {
  return props.isMobile ? <HomePageBodyMobile /> : <HomePageBodyDesktop />;
};

const spinnerPage = (props: any) => {
  return props.isMobile ? (
    <SpinnerPageBodyMobile newsFeedItems={mockData.results.Body.NewsFeed} />
  ) : (
    <SpinnerPageBodyDesktop newsFeedItems={mockData.results.Body.NewsFeed} />
  );
};

const display = (props: any) => {
  var displayPage;
  if (props.whichPage == "spinnerPage") {
    displayPage = spinnerPage(props);
  } else if (props.whichPage == "homePage") {
    displayPage = homePage(props);
  } else if (props.whichPage == "newsPage") {
    displayPage = NewsPage(props);
  }
  return <>{displayPage} </>;
};

const BodyContainer = (props: any) => {
  return <>{display(props)}</>;
};

export default BodyContainer;
