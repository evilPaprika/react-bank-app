import React, { Component } from "react";
import ownerPhoto from "../images/BobRoss.jpeg";
import "../styles/OwnewInfo.css";

class OwnerInfo extends Component {
  state = {
    OwnerName: "Роберт Норман Росс",
    OwnerPhone: "+79193977777",
    OwnerSite: "www.bobross.com",
    OwnerEmail: "info@bobross.com"
  };
  render() {
    return (
      <section className="owner-info box-wrapper">
        <img className="owner-info__photo" src={ownerPhoto} alt="owner" />
        <h3 className="owner-info__header">
          Индивидуальный предприниматель {this.state.OwnerName}
        </h3>
        <div className="owner-info__contacts">
          <span className="owner-info__phone">{this.state.OwnerPhone} </span>
          <a
            className="owner-info__site"
            href={"http://" + this.state.OwnerSite}
          >
            {this.state.OwnerSite + " "}
          </a>
          <a href={"mailto:" + this.state.OwnerEmail}>
            {this.state.OwnerEmail}
          </a>
        </div>
        <a className="owner-info__company" href="#">
          Информация о компании
        </a>
        <a className="owner-info__requisites" href="#">
          Показать реквизиты
        </a>
      </section>
    );
  }
}

export default OwnerInfo;
