import React from 'react';
import '../../App.css';
import {useForm} from 'react-hook-form';



function AnalyzePage() {

        const {register, handleSubmit} = useForm();
    
        const submited = mydata =>{
            var h_m = mydata["height"]/100
            var bmi = mydata["weight"]/(h_m*h_m)
            if(bmi < 18){
                alert("so skinny")
            }
            
        }
    
        return (
            <div className="row center">
            <form onSubmit={handleSubmit(submited)} className="form" id="reg-form">
                
                <div className="form-contain">
                    <h3>Age : </h3>
                <input type="number" name="age" ref={register}></input>
                </div>
                
                <div className="form-contain">
                    <h3>height : </h3>
                <input type="number" name="height" ref={register}></input>
                </div>
                
                <div className="form-contain">
                    <h3>weight : </h3>
                <input type="number" name="weight" ref={register}></input>
                </div>
                
                
                <input className="form-submit" type="submit" value="click"></input>
                
                </form>
            </div>
            
           
        )

}

export default AnalyzePage
