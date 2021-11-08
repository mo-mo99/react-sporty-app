import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';

export default function Item(props) {
    const {item} = props;
    return (
        <div key={item.id} className='card'>
            <img className="card-image" src={item.image} alt={item.name}/>
            <div className="card-body">
                <h2>{item.name}</h2>
                
                <Link to={`/Description/${item.id}`}>
                <Button buttonSize="btn--large" buttonStyle="btn--outline">More information</Button>
                </Link>
                <Button buttonSize="btn--medium" buttonStyle="btn--outline">Add</Button>
                </div> 
            </div>
    )
}
