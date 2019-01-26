import React, { Component } from "react";
import InputMask from "react-input-mask";

class PayUsingOnlineBank extends Component {
  render() {
    return (
      <div>
        <header>
          <strong>Сформируйте платежку и загрузите её в свой банк</strong>
        </header>
        <form action="/api/online-bank-payment" method="POST">
          <div className="input-option">
            <label htmlFor="from">От&nbsp;кого</label>
            <InputMask
              type="text"
              name="inn"
              id="from"
              placeholder="ИНН (12 цифр)"
              mask="999999999999"
              pattern="^\d{12}$"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="bik">БИК</label>
            <InputMask
              type="text"
              name="bik"
              id="bik"
              pattern="^\d{9}$"
              placeholder="Номер БИК (9 цифр)"
              mask="999999999"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="account-number">Номер&nbsp;счёта</label>
            <InputMask
              type="text"
              name="account_number"
              id="account-number"
              placeholder="Номер счёта (20 цифр)"
              pattern="^\d{20}$"
              mask="99999999999999999999"
              required
            />
          </div>
          <div className="input-option">
            <label htmlFor="product-name">За&nbsp;что</label>
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
          <button type="submit">Получить файл для интернет-банка</button>
        </form>
      </div>
    );
  }
}

export default PayUsingOnlineBank;
