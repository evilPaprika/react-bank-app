import React, { Component } from "react";

class PayUsingCard extends Component {
  state = {};
  render() {
    return (
      <div className="pay-card">
        <div className="pay-card__card">
          <div className="pay-card__card-bg">card</div>
        </div>
        <div className="pay-card__other-info">
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
        </div>
      </div>
    );
  }
}

export default PayUsingCard;
