import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, days, coursefee, img, _id} = props.course;
    return (
        <div className="service-card">
            <img src={img} alt="" />
            <p><b>{name}</b></p>
            <p>{days}</p>

            <p>Cost: {coursefee}</p>
            <Link className="nav-anchor" to={`/booking/${_id}`}><button>Order Now</button></Link>
        </div>
    );
};

export default Service;