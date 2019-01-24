import React, { Component } from "react";
import "../../styles/PayUsingCard.css";

class PayUsingCard extends Component {
  state = {};
  render() {
    return (
      <span className="pay-card">
        <div className="pay-card__card">
          <div className="pay-card__card-bg">
            <div className="pay-card__logos">
              <img
                src={require("../../images/mastercard_logo.png")}
                alt="logo"
                className="pay-card__logo"
              />
              <img
                src={require("../../images/maestro_logo.png")}
                alt="logo"
                className="pay-card__logo"
              />
              <img
                src={require("../../images/VISA_logo.png")}
                alt="logo"
                className="pay-card__logo"
              />
            </div>
            <input
              type="number"
              name="card number"
              id="card-number"
              placeholder="Номер карты"
              className="pay-card__card-number-input"
            />
            <input
              type="string"
              name="experation date"
              id="experation-date"
              placeholder="ММ/ГГ"
              className="pay-card__small-input"
            />
            <input
              type="number"
              name="cvc"
              id="cvc"
              placeholder="CVC"
              className="pay-card__small-input"
            />
          </div>
        </div>
        <form className="pay-card__other-info">
          <label htmlFor="amount-of-money">Сумма</label>
          <input
            type="number"
            name="amount of money"
            id="amount-of-money"
            placeholder="от 1 000 до 75 000₽"
          />
          <label htmlFor="comment">Комментарий</label>
          <input
            type="string"
            name="comment"
            id="comment"
            placeholder="До 150 символов"
          />
          <label htmlFor="client-email">Ваш email</label>
          <input
            type="email"
            name="email"
            id="client-email"
            placeholder="Для квитанций об оплате"
          />
          <br />
          <button type="submit">Заплатить</button>
        </form>
      </span>
    );
  }
}

export default PayUsingCard;
