import React from "react";
import CartItemDescription from "./cartItemDescription";

const CartItems = props => {
  return (
    <div className="CartItems">
      <div className="CartItemsHeader">
        <ul>
          <li>Product</li>
          <li>Title</li>
          <li>Shade</li>
          <li>Size</li>
          <li>Quantity</li>
          <li>Price</li>
          <li>Remove</li>
        </ul>
      </div>
      <div className="CartItemsContainer">
        {props.data.map((prop, index) => {
          return <CartItemDescription key={index} data={prop} index={index} />;
        })}
      </div>
      <div className="CartItemsFooter">
        <h4>Total</h4>
        <h4>Rs 900/=</h4>
      </div>
    </div>
  );
};
export default CartItems;
