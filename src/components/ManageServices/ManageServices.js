import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import './ManageServices.css';

const ManageServices = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-refuge-54152.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setCourse(data))
      }, []);
    return (
        <div>
            <div className="table-area">
                <h3 className="text">Manage Services</h3>
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
                        courses.map(course => <Table course={course} key={course._id}></Table> )
                    }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ManageServices;