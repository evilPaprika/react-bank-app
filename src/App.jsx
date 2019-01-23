import React, { Component } from "react";
import "./styles/App.css";
import OwnerInfo from "./components/OwnerInfo";
import Payment from "./components/Payment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OwnerInfo />
        <Payment />
      </div>
    );
  }
}

export default App;
