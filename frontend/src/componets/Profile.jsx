import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUseData } from '../App.jsx';
import WorkoutCard from './WorkoutCard.jsx';

export default function Profile() {
    const userData = useUseData();
    const [userForm, setUserForm] = useState([])

    useEffect(() => {
        axios
            .get("https://gym-blog-backend.onrender.com/workouts/getfromuser/" + userData.username, userForm)
            .then((res) => {
                setUserForm(res.data.data);
            });
    }, [userForm])

    console.log(userData, "ddata");
    return (
        <>
            <div>
                <h1>Profile</h1><br />
                <h2>User: {userData.username}</h2>
            </div>
            <div>
                <h2>Email: {userData.email}</h2>
            </div><br />

            <div>
                <h1>Workouts:</h1><br />
                <div className='grid'>
                    {userForm.map((workout) => {
                        return (
                            <WorkoutCard workout={workout} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}