import React from 'react'

import data from '../../data';
import Item from '../Item';

export default function ItemPage(props) {
    var items = data.items
    var cur =[]
    for (let i = 0; i < items.length; i++) {
        if(items[i].ex_id === props.match.params.id){
            cur.push(items[i])
        }
        
    }
    return (
        <div>
            <div className="link">
            <a href="/exercises">Back to exercises</a>
            </div>
            <div className="row center">
        
                {
                    
                    cur.map((item)=>(
                        <Item key={item.id} item={item}/>
                    ))
                }
            </div>
            
        </div>
    )
}

