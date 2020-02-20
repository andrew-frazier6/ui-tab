import React, { Component } from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="tab_box">
      <div className="nav">
        <ul>
          <li onClick={props.onClick}>Acadia</li>
          <li onClick={props.onClick}>Yosemite</li>
          <li onClick={props.onClick}>Bryce Canyon</li>
          <li onClick={props.onClick}>Redwood</li>
        </ul>
      </div>
      <div className="info_box">{props.data}</div>
    </div>
  );
}
export default Tab;
