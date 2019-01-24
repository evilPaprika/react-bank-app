import React, { Component } from "react";

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
      }
    ]
  };

  componentWillMount() {
    shuffle(this.state.products);
  }

  render() {
    const ToRender = this.state.products.map(e => (
      <article>
        <div>
          <img src={e.picure} alt="add image" />
        </div>
        <h6>{e.name}</h6>
        <span>{e.price}</span>
      </article>
    ));
    return <section>{ToRender}</section>;
  }
}

export default ProductGallery;
