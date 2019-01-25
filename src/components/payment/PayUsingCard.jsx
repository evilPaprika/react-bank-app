import React, { Component } from "react";
import "../../styles/PayUsingCard.css";

class PayUsingCard extends Component {
  render() {
    return (
      <form className="pay-card" action="/card-payment" method="POST">
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
              pattern="^\d{16}$"
              type="text"
              name="card_number"
              id="card-number"
              placeholder="Номер карты"
              className="pay-card__card-number-input"
              required
            />
            <input
              type="text"
              name="expiration_date"
              id="expiration-date"
              placeholder="ММ/ГГ"
              pattern="^(0[1-9]|10|11|12)/[0-9]{2}$"
              className="pay-card__small-input"
              required
            />
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder=" CVC"
              pattern="^\d{3}$"
              required
              className="pay-card__small-input"
            />
          </div>
        </div>
        <div className="pay-card__other-info">
          <label htmlFor="amount-of-money">Сумма</label>
          <input
            type="text"
            name="amount_of_money"
            id="amount-of-money"
            pattern="^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)$"
            placeholder="от 1 000 до 75 000₽"
            required
          />
          <label htmlFor="comment">Комментарий</label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="До 150 символов"
            maxLength="150"
          />
          <label htmlFor="client-email">Ваш email</label>
          <input
            type="email"
            name="email"
            id="client-email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Для квитанций об оплате"
          />
          <br />
          <button type="submit">Заплатить</button>
        </div>
      </form>
    );
  }
}

export default PayUsingCard;
