import React, { Component } from "react";
import Navbar from "./payment/Navbar";
import RequestPayment from "./payment/RequestPayment";
import PayUsingCard from "./payment/PayUsingCard";
import PayUsingOnlineBank from "./payment/PayUsingOnlineBank";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Payment extends Component {
  state = {};
  render() {
    return (
      <div className="box-wrapper">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route
              path="/pay/using_online_bank"
              component={PayUsingOnlineBank}
            />
            <Route path="/request_payment" component={RequestPayment} />
            <Route path={["/", "/pay/using_card"]} component={PayUsingCard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Payment;
