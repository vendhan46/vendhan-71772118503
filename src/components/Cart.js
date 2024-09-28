import React from 'react';

const Cart = ({ cartItems, totalPrice }) => {
    return (
        <div id="cart" className="cart">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button className="checkout-btn">Checkout</button>
        </div>
    );
};

export default Cart;
