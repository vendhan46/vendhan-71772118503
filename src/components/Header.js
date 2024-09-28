import React from 'react';

const Header = ({ cartCount }) => {
    return (
        <header className="header">
            <h1>Fresh Grocery</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#cart">Cart ({cartCount})</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
