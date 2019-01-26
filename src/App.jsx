import React, { Component } from "react";
import "./styles/App.css";
import UserInfo from "./components/UserInfo";
import Payment from "./components/Payment";
import ProductGallery from "./components/ProductGallery";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/admin-panel" component={AdminPanel} />
            <Route
              path="/"
              component={() => (
                <div>
                  <UserInfo />
                  <Payment />
                  <ProductGallery />
                  <Footer />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
