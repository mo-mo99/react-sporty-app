import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';

function Selected(props) {
    const {exercise} = props;
    return(
        <div key={exercise.id} className="card" >
            <a href={`/Description/${exercise.id}`}>
                <img className="card-image" src={exercise.image} alt={exercise.name}/>
            </a>
            <div className="card-body">
                <Link to={`/Description/${exercise.id}`}>
                <Button buttonStyle="btn--outline" buttonSize="btn--large">{exercise.name}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Selected
