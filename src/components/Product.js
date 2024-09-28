import React from 'react';

const Product = ({ name, price, img, addToCart }) => {
    return (
        <div className="product">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => addToCart({ name, price })}>Add to Cart</button>
        </div>
    );
};

export default Product;
