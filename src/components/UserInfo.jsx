import React, { Component } from "react";
import userPhoto from "../images/BobRoss.jpeg";
import "../styles/UserInfo.css";

class UserInfo extends Component {
  componentDidMount() {
    fetch("/api/user_info")
      .then(res => res.json())
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }

  state = {
    name: "Роберт Норман Росс",
    phone: "+79193977777",
    site: "www.bobross.com",
    email: "info@bobross.com"
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
