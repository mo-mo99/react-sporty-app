import React from 'react';
import data from '../../data';
import {useForm} from 'react-hook-form';
import '../../App.css';
import { Link } from 'react-router-dom';


var cur_user = data.users[0]


export default function ProfilePage() {
    const {register, handleSubmit} = useForm();
    
        const submited = mydata =>{
            var h_m = mydata["height"]/100
            var bmi = mydata["weight"]/(h_m*h_m)
            if(bmi < 18){
                alert("underweight")
            }else{
                if(bmi<24){
                    alert("healthy")
                }else{
                    if(bmi<29){
                        alert("overweight")
                    }else{
                        if(bmi<39){
                            alert("obese")
                        }else{
                            alert("extremly obese")
                        }
                    }
                }
            }
        }
        
    
    return (
        <div>

            <div className="row center">
                
                {
                    
                    cur_user.training_days.map((day) => (
                        <Link to={`/exer/${day}`}>
                            <button className="daily-btn">{day}</button>
                        </Link>
                    ))
                }
            </div>
            <div className="analyze">
                
                    <h1>Analyze your BMI</h1>
                    <div>
                    <form className="analyze-form" onSubmit={handleSubmit(submited)}  id="reg-form">
            
                <div >
                    <h3>height : </h3>
                <input className="analyze-form input" type="number" name="height" ref={register}></input>
                </div>
                
                <div >
                    <h3>weight : </h3>
                <input className="analyze-form input" type="number" name="weight" ref={register}></input>
                </div>
                
                
                <input className="analyze-form submit"  type="submit" value="click"></input>
                
                </form>
                
                    </div>
                    
            </div>
        </div>

    )
}
