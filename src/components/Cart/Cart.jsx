import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    
    return (
        <div className='cart'>
            <h3 className='cart-headline'>Order Summary</h3>
            <div>
                <p className='cart-details-common'>Selected Items: </p>
                <p className='cart-details-common'>Total Price: $</p>
                <p className='cart-details-common'>Shipping Charge: $</p>
                <p className='cart-details-common'>Tax: $</p>
                <h4 className='cart-grand-price'>Grand Total: $</h4>    
            </div>         
        </div>
    );
};

export default Cart;