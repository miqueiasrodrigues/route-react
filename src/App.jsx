import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/layout/Menu";
import Content from "./components/layout/Content";

export default (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Menu />
          <Content />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};
