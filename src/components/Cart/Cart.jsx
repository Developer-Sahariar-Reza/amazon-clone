import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let totalShippingCharge = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCharge = totalShippingCharge + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShippingCharge + tax;
  return (
    <div className="cart">
      <h3 className="cart-headline">Order Summary</h3>
      <div>
        <p className="cart-details-common">Selected Items: {quantity}</p>
        <p className="cart-details-common">Total Price: ${totalPrice}</p>
        <p className="cart-details-common">
          Shipping Charge: ${totalShippingCharge}
        </p>
        <p className="cart-details-common">Tax: ${tax.toFixed(2)}</p>
        <h4 className="cart-grand-price">
          Grand Total: ${grandTotal.toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default Cart;
