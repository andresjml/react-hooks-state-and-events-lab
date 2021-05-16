import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setIncart] = useState(false);

  function fucnInCart() {
    setIncart((inCart) => !inCart);
  }  

  return (
    <li className={(inCart ? "in-cart" : "")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={fucnInCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
