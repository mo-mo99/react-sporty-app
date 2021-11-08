import React from 'react';
import '../../App.css';
import Exercise from '../Exercise';
import data from '../../data';

export default function ExercisesPage() {

    return (
        <div>
            <div className="row center">
                {
                    data.exercises.map((exercise) => (
                        <Exercise key={exercise.id} exercise={exercise}/>
                    ))
                }
            </div>
        </div>
    )
}


