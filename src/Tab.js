import React, { Component } from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="nav">
      <ul>
        <li onClick={props.handleClick} id="4874042" value="1">
          Fort Smith
        </li>
        <li onClick={props.handleClick} id="4874090" value="2">
          Harpers Ferry
        </li>
        <li onClick={props.handleClick} id="4874185" value="3">
          Bloody Lane
        </li>
        <li onClick={props.handleClick} id="4874072" value="4">
          Stone House
        </li>
      </ul>

      {props.title}
    </div>
  );
}
export default Tab;

// TAB 1
/*
Fort Smith National Historic Site
8
listing image 
url
*/

// TAB 2
/*
Harpers Ferry
24
listing image 
url
*/

// TAB 3
/*
Bloody Lane
48
listing image 
url
*/

// TAB 4
/*
Stone House 
18
listing image 
url
*/
