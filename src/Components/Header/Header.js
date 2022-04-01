import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div>
                    <h2>Welcome to Tshirt Mania!!</h2>
                </div>
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/orderreveiw">Order Reveiw</Link>
                    <Link to="/grandpa">GrandPa</Link>
                </div>

            </nav>
        </div>
    );
};

export default Header;