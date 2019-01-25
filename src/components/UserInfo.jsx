import React, { Component } from "react";
import userPhoto from "../images/BobRoss.jpeg";
import "../styles/UserInfo.css";
import userInfo from "../index";

class UserInfo extends Component {
  componentDidMount() {
    this.setState(userInfo);
  }

  state = {
    name: "",
    phone: "",
    site: "",
    email: ""
  };

  render() {
    return (
      <section className="user-info box-wrapper">
        <img className="user-info__photo" src={userPhoto} alt="user" />
        <h3 className="user-info__header">
          Индивидуальный предприниматель {this.state.name}
        </h3>
        <div className="user-info__contacts">
          <span className="user-info__phone">{this.state.phone} </span>
          <a className="user-info__site" href={"http://" + this.state.site}>
            {this.state.site + " "}
          </a>
          <a href={"mailto:" + this.state.email}>{this.state.email}</a>
        </div>
        <a className="user-info__company" href="#">
          Информация о компании
        </a>
        <a className="user-info__requisites" href="#">
          Показать реквизиты
        </a>
      </section>
    );
  }
}

export default UserInfo;
