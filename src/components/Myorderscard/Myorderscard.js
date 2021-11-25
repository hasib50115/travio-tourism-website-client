import React from 'react';
import './Myorderscard.css';

const Myorderscard = (props) => {
    const {name, days, coursefee, img, _id} = props.service;
    const handledelete = (_id) => {
        fetch(`https://quiet-refuge-54152.herokuapp.com/deleteOrder/${_id}`, {
            method: "DELETE"
        })
        console.log(_id);
        alert("Are you sure to Delete this?");
    }
    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <div>
                    <h5 className="destination">{name}</h5> 
                    <h6>{days}</h6>                  
                    <h6>{coursefee}</h6>                  
                </div>
                <button onClick={()=>handledelete(_id)} className="btn btn-danger">Cancle</button>
            </div>
        </div>
    );
};

export default Myorderscard;