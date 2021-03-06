import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Condition rendering options
    //1. Element variable
    //2.Ternary operator condition? true:false
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one items</p>
    } else if (cart.length === 1) {
        command = <p>Please Add more</p>
    } else {
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;