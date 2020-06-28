import React from "react";
import styles from "./tabs.module.scss";

const tabContents = (props: any) => {};

const whichTab = (props: any) => {
  if (props.whichTab === "tab1") {
    return (
      <>
        <div id="London">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
      </>
    );
  } else if (props.whichTab === "tab2") {
    return (
      <>
        <div id="tokyo">
          <h3>tokyo</h3>
          <p>tokyo is the capital city of England.</p>
        </div>
      </>
    );
  }
};

export const Tabs = (props: any) => {
  debugger;
  return <>{whichTab(props)}</>;
};
