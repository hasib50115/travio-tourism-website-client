import React, { useState } from 'react';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageServices from '../ManageServices/ManageServices';
import MyOrder from '../MyOrder/MyOrder';
import './AdminDashBoard.css';

const AdminDashBoard = () => {
    const [control, setControl] = useState("addServices");
    console.log(control);
    return (
        <div>
            <div className="admin-section">
                <div className="dashboard">
                    <div className="admin-area">
                        <h2 className="text title">Dashboard</h2><br/>
                        <div className="buttons">
                            <ul>
                                <li onClick={()=>setControl("test")} className="text">Add Services</li>                   
                                <li onClick={()=>setControl("manageServices")} className="text">Manage Services</li>                  
                                <li onClick={()=>setControl("manageAllOrders")} className="text">Manage Orders</li>                  
                                <li className="text">Order Status</li>
                            </ul>
                        </div>                
                    </div>

                    <div className="text-area">
                        {control==="test" && <MyOrder></MyOrder>}
                        {control==="manageServices" && <ManageServices></ManageServices>}
                        {control==="manageAllOrders" && <ManageAllOrders></ManageAllOrders>}
                    </div>
                </div>
                
                <div className="content-area"></div>
            </div>
        </div>
    );
};

export default AdminDashBoard;