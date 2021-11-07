import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="footer">
                    <div className="footer-item item-one">
                        <h2>Travio</h2>
                        <p>Travio is one of the best travel website in the world. We always prefer you choice. A warm advance welcome to you.</p>
                    </div>

                    <div className="footer-item">
                        <h3>Services</h3>
                        
                        <p>About Us</p>
                        <p>Our Blogs</p>
                        <p>Our Services</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="footer-item">
                        <h3>Contacts</h3>
                        <p>Flat 20, Reynolds Neck, North</p>
                        <p>Helenaville, FV77 8WS</p>
                        <p>Phone: +2(305) 588-4407</p>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Travio © 2021 All Right Reserved</p>
                    <p>Terms of Service | Terms of Policey</p>
                </div>                
            </div>
        </div>
    );
};

export default Footer;