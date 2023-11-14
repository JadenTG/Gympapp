import React, { useEffect, useState } from 'react'
import axios from "axios";
import App from '../App';
import '../App.css';
import { Link } from 'react-router-dom'
import WorkoutCard from './WorkoutCard';

export default function DisplayWorkout() {
  const [userForm, setUserForm] = useState([])
  // const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4000/workouts/", userForm)
      .then((res) => {
        setUserForm(res.data.data);
      });
  }, [userForm])

  return (
    <div>
      <h1>Workouts</h1><br />
      <div className='grid'>
        {userForm.map((workout) => {
          return (
            <WorkoutCard workout={workout} />
          )
        })}
      </div>
    </div>
  )
}