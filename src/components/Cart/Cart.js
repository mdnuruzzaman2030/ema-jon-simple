import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } =  props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        console.log(total);
        shipping = shipping + product.shipping ;
    }

    const tax =  parseFloat((total * 0.1).toFixed(2));
    const grandTotal =  total+shipping+tax ;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: $ {total} </p>
            <p>Total Shipping : $ {shipping} </p>
            <p>tax : $ {tax} </p>
            <p>Grand Total : $ {grandTotal} </p>
        </div>
    );
};

export default Cart;