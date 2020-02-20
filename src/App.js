import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Tab from "./Tab";

function App() {
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

export default App;
