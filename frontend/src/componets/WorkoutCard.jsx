import React from "react";
import { Link } from 'react-router-dom'

export default function WorkoutCard({ workout }) {
    return (
        <div className="row">
            <div className="col-sm-7">
                <div className='card-deck'>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h4 className='card-title'>{workout.machinename}</h4>
                            <h5 className="card-title">{workout.name}</h5>
                            {/* <h5 className='card-title'>{workout.machinelink}</h5> */}
                            <p className="card-text">
                                {workout.description}
                            </p>
                            <img className='card-img img' src={workout.imageurl} /><br />
                            <Link className='btn btn-dark' to={workout.machinelink} target='_blank'>
                                Read More.
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}