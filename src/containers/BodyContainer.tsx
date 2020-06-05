import React, { useState } from "react";
import { HomePageBody } from "../views/homePage/HomePage";
import { SpinnerPageBody } from "../views/spinnerPage/SpinnerPage";
import { NewsPageBodyMobile } from "../views/newsPage/NewsPageMobile";
import { NewsPageBodyDesktop } from "../views/newsPage/NewsPageDesktop";
import mockData from "./MockData.json";

const NewsPage = (props: any) => {
  return props.isMobile ? <NewsPageBodyMobile /> : <NewsPageBodyDesktop />;
};

const display = (props: any) => {
  var displayPage;
  if (props.whichPage == "spinnerPage") {
    displayPage = (
      <SpinnerPageBody newsFeedItems={mockData.results.Body.NewsFeed} />
    );
  } else if (props.whichPage == "homePage") {
    displayPage = <HomePageBody />;
  } else if (props.whichPage == "newsPage") {
    displayPage = NewsPage(props);
  }
  return <>{displayPage} </>;
};

const BodyContainer = (props: any) => {
  return <>{display(props)}</>;
};

export default BodyContainer;
