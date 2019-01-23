import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";

class Navbar extends Component {
  state = {
    secondChoice: "using_card"
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/pay" activeClassName="link-selected">
            Заплатить
          </NavLink>
          <NavLink to="/request_payment" activeClassName="link-selected">
            Запросить платёж
          </NavLink>
          <Route
            path="/pay"
            component={() => (
              <div>
                <Route
                  exact
                  path="/pay"
                  render={() => (
                    <Redirect to={"/pay/" + this.state.secondChoice} />
                  )}
                />
                <NavLink
                  onClick={() => (this.state.secondChoice = "using_card")}
                  to="/pay/using_card"
                  activeClassName="link-selected"
                >
                  С карты любого банка
                </NavLink>
                <NavLink
                  onClick={() =>
                    (this.state.secondChoice = "using_online_bank")
                  }
                  to="/pay/using_online_bank"
                  activeClassName="link-selected"
                >
                  Из своего интернет-банка
                </NavLink>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Navbar;
