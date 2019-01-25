import React, { Component } from "react";
import "../styles/ProductGallery.css";
import userInfo from "../index";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class ProductGallery extends Component {
  state = {
    products: [
      {
        picure: require("../images/products/PrussianBlue-1.jpg"),
        name: "Prussian Blue",
        price: "Our Price: $7.29"
      },
      {
        picure: require("../images/products/BRDDVD-1.jpg"),
        name: "Bob Ross Happy Painter Documentary DVD",
        price: "Our Price: $29.99"
      },
      {
        picure: require("../images/products/R6402-1.jpg"),
        name: "2 inch Background Brush",
        price: "Our Price: $19.49"
      },
      {
        picure: require("../images/products/R6520-1.jpg"),
        name: "Screen For Thinner Can",
        price: "Our Price: $8.29"
      },
      {
        picure: require("../images/products/R6245-1.jpg"),
        name: "Brush Cleaner/Conditioner 4 oz",
        price: "Our Price: $6.99"
      },
      {
        picure: require("../images/products/R100-1.jpg"),
        name: "Best of Joy of Painting",
        price: "Our Price: $26.99"
      },
      {
        picure: require("../images/products/RTT01-1.jpg"),
        name: "Ross Tabletop Easel",
        price: "Our Price: $111.99"
      }
    ],
    name: "предприниматель"
  };

  componentWillMount() {
    shuffle(this.state.products);
  }

  componentDidMount() {
    this.setState(userInfo);
  }

  render() {
    return (
      <section className="box-wrapper">
        <h3>{this.state.name} предоставляет продукты</h3>
        <div className="products">
          <Products products={this.state.products} />
        </div>
      </section>
    );
  }
}

const Products = ({ products }) => (
  <>
    {products.slice(0, 3).map(product => (
      <div className="product" key={product.name}>
        <img src={product.picure} alt="product" />
        <br />
        <strong slyle={{ display: "block" }}>{product.name}</strong>
        <br />
        <span slyle={{ display: "block" }}>{product.price}</span>
      </div>
    ))}
  </>
);

export default ProductGallery;
