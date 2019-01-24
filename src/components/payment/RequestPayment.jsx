import React, { Component } from "react";

class RequestPayment extends Component {
  componentDidMount() {
    fetch("/api/user_info")
      .then(res => res.json())
      .then(res => this.setState(res))
      .catch(err => console.log(err));
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
        <form>
          <div className="input-option">
            <label htmlFor="recievers-inn">ИНН&nbsp;получателя</label>
            <input
              type="number"
              name="recievers-inn"
              id="recievers-inn"
              placeholder="ИНН получателя"
            />
          </div>
          <div className="input-option">
            <label htmlFor="comment">БИК</label>
            <input type="number" name="bik" id="bik" placeholder="Номер БИК" />
          </div>
          <div className="input-option">
            <label htmlFor="account-number">Номер счёта</label>
            <input
              type="number"
              name="Account number"
              id="account-number"
              placeholder="Номер счёта"
            />
          </div>
          <div className="input-option">
            <label htmlFor="product-name">За что</label>
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
          <div className="input-option">
            <label htmlFor="phone-number">Телефон</label>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              placeholder="Ваш номер телефона"
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
            />
          </div>
        </form>
      </div>
    );
  }
}

export default RequestPayment;
