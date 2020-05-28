import React, { useState } from "react";
import { HomePageBody } from "../views/homePage/HomePage";
import { SpinnerPageBody } from "../views/spinnerPage/SpinnerPage";
// import { NewsPageBody } from "./../views/newsPage/newsPage";
import mockData from "./MockData.json";

const display = (props: any) => {
  var displayPage;
  if (props.whichPage == "spinnerPage") {
    displayPage = (
      <SpinnerPageBody newsFeedItems={mockData.results.Body.NewsFeed} />
    );
  } else if (props.whichPage == "homePage") {
    displayPage = <HomePageBody />;
  }
  return <>{displayPage} </>;
};

const BodyContainer = (whichPage: any) => {
  return <>{display(whichPage)}</>;
};

export default BodyContainer;
