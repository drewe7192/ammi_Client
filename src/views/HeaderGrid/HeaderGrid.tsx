import React from "react";
import MenuDropdownComponent from "../../utils/Hamburger/MenuDropdownComponent.js";
import "./HeaderGrid.css";

const HeaderGrid = () => {
  return (
    <>
      {" "}
      <div className="" style={{ marginTop: "7vh" }}>
        <div
          style={{
            float: "left",
            paddingLeft: "5vw",
            color: "white",
            paddingTop: "2vh",
          }}
        >
          Ammi
        </div>
        <div className="header" style={{ float: "right" }}>
          <div className="Navbargrid-container">
            <div className="NavVargrid-item">Tv</div>
            <div className="NavVargrid-item">Manga</div>
            <div className="NavVargrid-item">Movies</div>
            <div>
              <MenuDropdownComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderGrid;
