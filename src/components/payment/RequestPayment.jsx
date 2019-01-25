import React, { Component } from "react";
import userInfo from "../../index";

class RequestPayment extends Component {
  componentDidMount() {
    this.setState(userInfo);
  }

  state = {
    name: "предприниматель"
  };
  render() {
    return (
      <div>
        <header>
          <strong>
            Создайте платежку, а {this.state.name} подпишет её у себя в
            интернет-банке
          </strong>
        </header>
        <form action="/request-payment" method="POST">
          <div className="input-option">
            <label htmlFor="recievers-inn">ИНН&nbsp;получателя</label>
            <input
              type="text"
              name="recievers_inn"
              id="recievers-inn"
              placeholder="ИНН получателя (12 цифр)"
              pattern="^\d{12}$"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="comment">БИК</label>
            <input
              type="text"
              name="bik"
              id="bik"
              pattern="^\d{9}$"
              placeholder="Номер БИК (9 цифр)"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="account-number">Номер счёта</label>
            <input
              type="text"
              name="account_number"
              id="account-number"
              placeholder="Номер счёта (20 цифр)"
              pattern="^\d{20}$"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="product-name">За что</label>
            <input
              type="text"
              name="product_name"
              id="product-name"
              placeholder="Название продукта"
              required
            />
          </div>
          <div className="input-option">
            <label>&nbsp;</label>
            <select name="nds">
              <option value="0">Без НДС</option>
              <option value="10">НДС 10%</option>
              <option value="18">НДС 18%</option>
            </select>
          </div>
          <div className="input-option">
            <label htmlFor="amount">Сколько</label>
            <input
              type="text"
              name="amount_of_money"
              id="amount"
              placeholder="от 1 000 до 75 000₽"
              style={{ maxWidth: "250px" }}
              pattern="^([1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-6][0-9]{4}|7[0-4][0-9]{3}|75000)$"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="phone-number">Телефон</label>
            <input
              type="tel"
              name="phone"
              id="phone-number"
              placeholder="Ваш номер телефона"
              pattern="^\d{11}$"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <div className="input-option">
            <label htmlFor="client-email">Ваш email</label>
            <input
              type="email"
              name="email"
              id="client-email"
              placeholder="Для квитанций об оплате"
              style={{ maxWidth: "250px" }}
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <button type="submit">Заплатить</button>
        </form>
      </div>
    );
  }
}

export default RequestPayment;
