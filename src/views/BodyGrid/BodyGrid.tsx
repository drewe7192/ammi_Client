import React from "react";
import "./BodyGrid.css";
import "./../../utils/BackGroundVideo/BackgroundVideo.css";
import ModalComponent from "../../utils/modalComponent/ModalComponent";

const BodyGrid = () => {
  return (
    <>
      <div className="bodygrid-container">
        <div className="bodygrid-item">
          <hr style={{ width: "70%" }} />
          <div style={{ paddingTop: "4vh" }}>
            <div
              style={{ fontSize: "7vh", color: "black", fontWeight: "bold" }}
            >
              The New 2020 Anime Spring Priview Guide{" "}
            </div>
            Check everyday for fresh takes about this seasons upcoming shows.
          </div>
          <div
            style={{
              fontSize: "2vh",
              paddingTop: "9vh",
              float: "left",
              paddingLeft: "9vh",
            }}
          >
            View
          </div>
        </div>
        <div className="bodygrid-item"></div>
      </div>
      <div className="footer">
        {/* <div
          style={{
            fontSize: "2vh",

            float: "left",
            paddingLeft: "9vh",
          }}
        >
          ayyyy
        </div> */}
        <div
          style={{
            fontSize: "2vh",
            float: "right",
            paddingLeft: "9vh",
          }}
        >
          dhdshcVKJDSHCJVKDHLVCKDKVC
        </div>
      </div>
    </>
  );
};

export default BodyGrid;
