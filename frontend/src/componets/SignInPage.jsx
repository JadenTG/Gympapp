import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
import { useUseData } from "../App";

export default function SignIn() {

  const userData = useUseData();

  const [UserInfo, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const Nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const FetchData = async () => {
      try {
        var options = {
          method: 'POST',
          body: JSON.stringify(UserInfo),
          headers: {
            'content-Type': 'application/json'
          }
        };
        var Data = await fetch('https://gym-blog-backend.onrender.com/workoutuser/sign-in', options);
        var a = await Data.json();
        console.log(a.data, UserInfo);
       
        userData.setUsername(a.data.username);
        userData.setEmail(a.data.email);

        Nav('/profile')
      } catch (err) {
         alert('Error, Failed to login!', err)
        console.log(err)
      }
    }
    FetchData()
  }

  return (
    <div className="signIn">
      <div className="signInChild">
        <form className="form">
          <h1>Sign In</h1><br /><br />
          <label for="user">Username: </label><br />
          <input type="text" id="user" name="User" placeholder="JohnDoe64" value={UserInfo.username} onChange={(e) => {
            setUser(prev => {
              return { ...prev, username: e.target.value }
            })
          }} required /><br />
          <label for="email">Email: </label><br />
          <input type="email" id="email" name="Email" placeholder="JohnDoe@gmail.com" value={UserInfo.email} onChange={(e) => {
            setUser(prev => {
              return { ...prev, email: e.target.value }
            })
          }} required /><br />
          <label for="password">Password: </label><br />
          <input type="password" id="password" name="Pass" placeholder="Something" value={UserInfo.password} onChange={(e) => {
            setUser(prev => {
              return { ...prev, password: e.target.value }
            })
          }} required /><br />
          <button className="button" onClick={handleSubmit}>Sign In</button><br />
          <a href="/register" className="link">Dont have an account? <p className="sign">Sign up</p></a>
        </form>
      </div>
    </div>
  )
}