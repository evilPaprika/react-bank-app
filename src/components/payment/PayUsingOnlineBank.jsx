import React, { Component } from "react";

class PayUsingOnlineBank extends Component {
  render() {
    return (
      <div>
        <header>
          <strong>Сформируйте платежку и загрузите её в свой банк</strong>
        </header>
        <form>
          <div className="input-option">
            <label htmlFor="from">От&nbsp;кого</label>
            <input type="string" name="from whom" id="from" placeholder="ИНН" />
          </div>
          <div className="input-option">
            <label htmlFor="comment">БИК</label>
            <input type="number" name="bik" id="bik" placeholder="Номер БИК" />
          </div>
          <div className="input-option">
            <label htmlFor="account-number">Номер&nbsp;счёта</label>
            <input
              type="number"
              name="Account number"
              id="account-number"
              placeholder="Номер счёта"
            />
          </div>
          <div className="input-option">
            <label htmlFor="product-name">За&nbsp;что</label>
            <input
              type="string"
              name="Product name"
              id="product-name"
              placeholder="Название продукта"
            />
          </div>
          <div className="input-option">
            <label>&nbsp;</label>
            <select>
              <option value="0">Без НДС</option>
              <option value="10">НДС 10%</option>
              <option value="18">НДС 18%</option>
            </select>
          </div>
          <div className="input-option">
            <label htmlFor="amount">Сколько</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Сколько"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <button type="submit">Заплатить</button>
        </form>
      </div>
    );
  }
}

export default PayUsingOnlineBank;
