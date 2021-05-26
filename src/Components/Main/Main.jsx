import React from "react";
import "./Main.css";
import About from "../About/About";
import Topbar from "../Topbar/Topbar";

const Main = (props) => {
  return (
    <div className="main-div">
      <div>
        <Topbar />
      </div>
      <div style={{ paddingTop: "2.5%" }}>
        <About />
      </div>
    </div>
  );
};

export default Main;
