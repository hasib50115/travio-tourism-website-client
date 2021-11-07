import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-section">
                <div class="navbar navbar-light d-flex" className="header-mobile">
                    <h2 className="logo">Tra<span>vio</span></h2>
                    <div class="d-flex" className="nav-section">
                        <Link className="nav-anchor" to='home'>Home</Link>
                        <Link className="nav-anchor" to='services'>Services</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;