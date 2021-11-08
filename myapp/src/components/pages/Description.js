import React from 'react'
import data from '../../data'

function Description(props) {
    var exer = data.items.filter(e => e.id === props.match.params.id)
    console.log(exer[0].name)
    return (
        <div key={exer.id} className="row center" >
            <div className="card">

                <img className="card-image" src={exer[0].image} alt={exer.name} />

                <div className="card-body">
                    {exer[0].name}

                </div>
            </div>
            <div className="card-description">
                {exer[0].description}
            </div>
        </div>

    )
}

export default Description
