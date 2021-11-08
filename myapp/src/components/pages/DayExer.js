import React from 'react'
import data from '../../data';

import Selected from '../Selected';




function DayExer(props) {
    var cur_user = data.users[0]
    var daily_exer = []
    for(var i in cur_user.training_days){
        if(cur_user.training_days[i] === props.match.params.day){
            daily_exer = cur_user.selected_exercises[i]
        }
        
    }
    var day_exer = data.items.filter(e => daily_exer.includes(e.id))
    return (
        <div className="row center">
            <div className="row center text">Train these , 
            Have a good {props.match.params.day}</div>
                {
                    day_exer.map((exercise) => (
                        <Selected key={exercise.id} exercise={exercise}/>
                    ))
                }
                </div>
    )
}

export default DayExer
