import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import useAuth from '../../hooks/useAuth';
import Myorderscard from '../Myorderscard/Myorderscard';

const MyOrders = () => {
    const {user} = useAuth();
    const [services, setServices] = useState([]);

    



    useEffect(()=> {
        fetch(`http://localhost:5000/myOrderss/${user.displayName}`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    })
    return (
        <div>
            <h2 className="text">My Orders</h2>

            <div className="scard">
                {
                    services.map(service => <Myorderscard service={service} key={service._id}></Myorderscard> )
                }
            </div>

            
        </div>
    );
};

export default MyOrders;