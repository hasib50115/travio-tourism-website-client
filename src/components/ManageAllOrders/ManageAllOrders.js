import React, { useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
        const [orders, setCourse] = useState([]);
        
        useEffect(()=>{
            fetch('https://quiet-refuge-54152.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setCourse(data))
          }, []);
    return (
        <div>
            <h3 className="text">Manage All Orders</h3>
            <div className="table-area">
                <table id="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => <OrderTable order={order} key={order._id}></OrderTable> )
                    }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;