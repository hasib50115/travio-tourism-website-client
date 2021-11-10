import React from 'react';
import { useForm } from "react-hook-form";
import './MyOrder.css';



const MyOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addServices',{
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(data);
    }

    return (
        <div>
            <h2 className="text">Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="name" {...register("name")} /> <br/> <br/>
            <input defaultValue="days" {...register("days")} /> <br/> <br/>
            <input defaultValue="cost" {...register("coursefee")} /> <br/> <br/>
            
            {/* include validation with required or other standard HTML validation rules */}
            <input defaultValue="image link" {...register("img", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <br/> <br/>
            <input type="submit" />
            </form>
        </div>
    );
};

export default MyOrder;