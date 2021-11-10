import React from 'react';
import './Special.css';

const Special = (props) => {
    const {name, description, img} = props.service;
    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <div>
                    <h5 className="title">{name}</h5>                   
                </div>
            </div>
        </div>
    );
};

export default Special;