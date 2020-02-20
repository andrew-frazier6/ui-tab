import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Tab from "./Tab.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url =
      "https://developer.nps.gov/api/v1/places?api_key=bRrLhFfbvZMWxHlCWDqPt45vwoNgz950IaYNYkmC";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
        console.log(data);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="tab_container">
          <Tab />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
