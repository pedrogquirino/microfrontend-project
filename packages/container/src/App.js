import React from "react";
import HeaderApp from "./components/HeaderApp";
import ContentApp from "./components/ContentApp";
import BannerApp from "./components/BannerApp";
import "./App.css";

export default () => {
  return (
    <div className="container">
      <div className="header">
        <HeaderApp />
      </div>
      <div className="banner">
        <BannerApp />
      </div>
      <div className="content">
        <ContentApp />
      </div>
    </div>
  );
};
