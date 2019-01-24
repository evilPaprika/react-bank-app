import React, { Component } from "react";
import Navbar from "./payment/Navbar";
import RequestPayment from "./payment/RequestPayment";
import PayUsingCard from "./payment/PayUsingCard";
import PayUsingOnlineBank from "./payment/PayUsingOnlineBank";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../styles/Payment.css";

class Payment extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="box-wrapper">
          <Navbar />
          <Switch>
            <Redirect exact from="/" to="/pay" />
            <Route
              path="/pay/using_online_bank"
              component={PayUsingOnlineBank}
            />
            <Route path="/request_payment" component={RequestPayment} />
            <Route path="/pay/using_card" component={PayUsingCard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Payment;
