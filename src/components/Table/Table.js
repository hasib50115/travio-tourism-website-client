import React from 'react';

const Table = (props) => {
    const {name, days, coursefee, img, _id, status} = props.course;
    const handledelete = (_id) => {
        alert("Are you sure to DELETE this service?");
        fetch(`https://quiet-refuge-54152.herokuapp.com/deleteService/${_id}`, {
            method: "DELETE"
        })
        console.log(_id);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{img}</td>
            <td id="status">{status}</td>            
            <button onClick={()=>handledelete(_id)} className="btn btn-danger">Delete</button>

            
        </tr>
        
    );
};

export default Table;

// <td id="status">{status}</td>