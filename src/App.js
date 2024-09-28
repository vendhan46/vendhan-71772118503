import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    
    const products = [
        { name: "Apple", price: 2.50, img: "/images/apple.jpg" },
        { name: "Banana", price: 1.20, img: "/images/banana.jpg" },
        { name: "Carrot", price: 1.80, img: "/images/carrot.jpg" }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="App">
            <Header cartCount={cart.length} />
            <div className="main">
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cart} totalPrice={totalPrice} />
            </div>
            <footer>
                <p>&copy; 2024 Fresh Grocery. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
