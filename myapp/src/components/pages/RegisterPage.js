import React from 'react';
import '../../App.css';
import {useForm} from 'react-hook-form';
import data from '../../data';


export default function RegisterPage() {
    
    const {register, handleSubmit} = useForm();
    
    const submited = mydata =>{
        console.log(mydata)
        console.log(data.users[0])
    }

    return (
        <div className="row center">
        <form onSubmit={handleSubmit(submited)} className="form" id="reg-form">
            <h1>Registeration</h1>
            <div className="form-contain">
                <h3>User name : </h3>
            <input type="text" name="user_name" ref={register}></input>
            </div>
            
            <div className="form-contain">
                <h3>E-mail : </h3>
            <input type="email" name="email" ref={register}></input>
            </div>
            
            <div className="form-contain">
                <h3>Password : </h3>
            <input type="password" name="password" ref={register}></input>
            </div>
            
            
            <input className="form-submit" type="submit" value="click"></input>
            
            </form>
        </div>
        
       
    )
}



