import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
    return (
        <section id="products" className="products">
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
