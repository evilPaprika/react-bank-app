import React, { Component } from "react";
import "./styles/App.css";
import UserInfo from "./components/UserInfo";
import Payment from "./components/Payment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInfo />
        <Payment />
      </div>
    );
  }
}

export default App;
