import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Tab from "./Tab.js";
import Photo from "./Photo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: null,
      tabSelected: "1",
      idSelected: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://developer.nps.gov/api/v1/places?api_key=bRrLhFfbvZMWxHlCWDqPt45vwoNgz950IaYNYkmC"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            places: result.data
          });
          console.log(result.data);
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  handleClick = e => {
    this.setState({
      tabSelected: e.target.value,
      idSelected: e.target.id
    });
  };

  showPhoto = () => {
    return this.state.places
      ? this.state.places.map((place, i) => {
          if (place.id === this.state.idSelected) {
            return <Photo url={place.listingimage.url} key={i} />;
          }
        })
      : "";
  };

  render() {
    console.log(this.state.idSelected);
    let myData = this.state.places ? this.state.places[0].title : "loading...";

    return (
      <div className="App">
        <Header />
        <div className="tab_container">
          <Tab handleClick={this.handleClick} />
          {this.showPhoto()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
