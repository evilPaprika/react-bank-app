import React, { Component } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

class Navbar extends Component {
  state = {
    secondChoice: "using_card"
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar__first-row">
          <NavLink
            to="/pay"
            activeClassName="link-selected"
            className="navbar__choice"
          >
            Заплатить
          </NavLink>{" "}
          <NavLink
            to="/request_payment"
            activeClassName="link-selected"
            className="navbar__choice"
          >
            Запросить&nbsp;платёж
          </NavLink>
        </div>
        <Route
          path="/pay"
          component={() => (
            <div className="navbar__second-row">
              <Route
                exact
                path="/pay"
                render={() => (
                  <Redirect to={"/pay/" + this.state.secondChoice} />
                )}
              />
              <NavLink
                onClick={() => this.setState({ secondChoice: "using_card" })}
                to="/pay/using_card"
                activeClassName="link-selected"
                className="navbar__choice-second navbar__from-card-choice"
              >
                💳&nbsp;С&nbsp;карты&nbsp;любого&nbsp;банка
              </NavLink>{" "}
              <NavLink
                onClick={() =>
                  this.setState({ secondChoice: "using_online_bank" })
                }
                to="/pay/using_online_bank"
                activeClassName="link-selected"
                className="navbar__choice-second navbar__from-internet-bank-choice"
              >
                💻&nbsp;Из&nbsp;своего&nbsp;интернет&#8209;банка
              </NavLink>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Navbar;
