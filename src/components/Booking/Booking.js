import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const orderConfirm = ()=>{
        alert("Order Confirmed.");
    }
    
    

    const onSubmit = data => {
        data.username = user.displayName;
        data.status = "pending";
        console.log(data);

        fetch('http://localhost:5000/confirmOrder', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${serviceId}`)
        .then(res=> res.json())
        .then(data=> setService(data))
    }, [])
    console.log(service);
    return (
        <div className="detail-section">
            <h2 className="text">Booking Page</h2>
            <div className="detail-area">

                <div className="detail">
                    <div className="detail-card">
                        <img src={service.img} alt="" />
                        <h5 className="text">{service.name}</h5>
                        <h6 className="text">{service.days}</h6>
                        <h6 className="text">{service.coursefee}</h6>
                    </div>
                </div>

                <div className="form-area">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={service.name} {...register("name")} /> <br/> <br/>
                    <input defaultValue={service.days} {...register("days")} /> <br/> <br/>
                    <input defaultValue={service.coursefee} {...register("coursefee")} /> <br/> <br/>
                    
                    {/* include validation with required or other standard HTML validation rules */}
                    <input defaultValue={service.img} {...register("img", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <br/> <br/>
                    <input onClick={orderConfirm} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;