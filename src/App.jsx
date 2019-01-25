import React, { Component } from "react";
import "./styles/App.css";
import UserInfo from "./components/UserInfo";
import Payment from "./components/Payment";
import ProductGallery from "./components/ProductGallery";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInfo />
        <Payment />
        <ProductGallery />
        <Footer />
      </div>
    );
  }
}

export default App;
