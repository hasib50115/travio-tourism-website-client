import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    
    return (
        <div className="header">
            <div className="header-section">
                <div class="navbar navbar-light d-flex" className="header-mobile">
                    <h2 className="logo">Tra<span>vio</span></h2>
                    <div class="d-flex" className="nav-section">
                        <Link className="nav-anchor" to='home'>Home</Link>
                        <Link className="nav-anchor" to='services'>Services</Link>
                        <Link className="nav-anchor" to='login'>Login</Link>
                        <Link className="nav-anchor" to='booking'>Booking</Link>
                        <Link className="nav-anchor" to='myorder'>My Order</Link>
                        <Link className="nav-anchor" to='myorderss'>MyOrders</Link>
                        <Link className="nav-anchor btn btn-danger" to='admin'>Admin</Link>
                        
                        { user.displayName && <button className="btn btn-warning" onClick={logout}>Log Out</button> }
                        <span>{user.displayName}</span>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;



// <Link className="nav-anchor" to='register'>Register</Link>

// <Link className="nav-anchor" to='myorder'>My Orders</Link>