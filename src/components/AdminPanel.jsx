import React, { Component } from "react";
import "../styles/AdminPanel.css";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.RenderSort = this.RenderSort.bind(this);
    this.RenderFilter = this.RenderFilter.bind(this);
    this.RenderTable = this.RenderTable.bind(this);
    this.RenderCardPayments = this.RenderCardPayments.bind(this);
    this.RenderRequestedPayments = this.RenderRequestedPayments.bind(this);
  }
  RenderCardPayments(e) {
    e.preventDefault();
    this.state.paymentMethod = "card-payment";
    this.state.additionalParams = "";
    this.RenderTable();
  }
  RenderRequestedPayments(e) {
    e.preventDefault();
    this.state.paymentMethod = "request-payment";
    this.state.additionalParams = "";
    this.RenderTable();
  }

  RenderSort(e) {
    e.preventDefault();
    this.state.additionalParams = `?sort=${this.state.sort_type}&field=${
      this.state.sort_field
    }`;
    this.RenderTable();
  }

  RenderFilter(e) {
    e.preventDefault();
    this.state.additionalParams = `?filter=${this.state.filter}&field=${
      this.state.filter_field
    }`;
    this.RenderTable();
  }

  RenderTable() {
    fetch("/api/" + this.state.paymentMethod + this.state.additionalParams, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => this.setState({ view: res }))
      .catch(err => console.log(err));
  }
  state = {
    view: [],
    paymentMethod: "card-payment",
    additionalParams: ""
  };
  render() {
    return (
      <div>
        <div className="navigation">
          <button
            className="navigation__button"
            onClick={this.RenderCardPayments}
          >
            Платежи по картам
          </button>
          <button
            className="navigation__button"
            onClick={this.RenderRequestedPayments}
          >
            Запрошенные платежи
          </button>
          <div className="navigation__forms">
            <form className="navigation__form" onSubmit={this.RenderSort}>
              <input
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                placeholder="Поле"
                id="sort_field"
                required
              />
              <input
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                placeholder="Направление"
                pattern="^(asc)|(desc)$"
                id="sort_type"
                required
              />
              <button type="submit">Сортировать</button>
            </form>
            <form className="navigation__form" onSubmit={this.RenderFilter}>
              <input
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                placeholder="Поле"
                id="filter_field"
                required
              />
              <input
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                placeholder="Строка"
                id="filter"
                required
              />
              <button type="submit">Отфильтровать</button>
            </form>
          </div>
        </div>
        {this.state.view.length > 0 ? (
          <div className="table">
            <this.TableHeader entry={this.state.view[0]} />{" "}
            <this.Rows entries={this.state.view} />
          </div>
        ) : (
          " "
        )}
      </div>
    );
  }
  TableHeader = ({ entry }) => (
    <div className="table__row">
      {Object.keys(entry)
        .slice(1, -1)
        .map(key => (
          <span className="table__key table__cell" key={key}>
            {key}
          </span>
        ))}
    </div>
  );

  Rows = ({ entries }) => (
    <>
      {entries.map(entry => (
        <div className="table__row" key={entry._id}>
          {Object.values(entry)
            .slice(1, -1)
            .map(cell => (
              <span
                className={"table__cell " + (!entry.trusted ? "untrusted" : "")}
              >
                {cell.toString()}
              </span>
            ))}
          {entry.trusted ? (
            <button
              onClick={() => this.makeUntrusted(entry._id)}
              className="table__cell"
            >
              {" "}
              Небезопасный платеж{" "}
            </button>
          ) : (
            " "
          )}
        </div>
      ))}
    </>
  );

  updateInputValue(evt) {
    this.setState({
      [evt.target.id]: evt.target.value
    });
  }

  makeUntrusted(id) {
    fetch("/api/" + this.state.paymentMethod, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `id=${id}`
    });
  }
}

export default AdminPanel;
