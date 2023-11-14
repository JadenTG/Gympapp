import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

/*export default function Register(){

    const User = useUser()
    const [UserInfo,SetUser] = useState({
        username:'',
        email:'',
        password:''
    })
    const Nav = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        try{
            var options = {
                method: 'POST',
                body: JSON.stringify(UserInfo),
                headers: {
                  'Content-Type': 'application/json' 
                }
              };
              axios
                ('https://gym-blog-backend.onrender.com/workoutuser/register', options)
                .then((res) => res.json())
                .then(data => {
                    console.log(data.data);
                    User.SetUser({ Email: data.data.email, Password: data.data.password});
                })
            }catch{
                alert('Error, Failed to create account!')
            }
        }*/
export default function Register() {
    const [userInfo, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const Nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            axios.post('https://gym-blog-backend.onrender.com/workoutuser/register', userInfo, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response && response.data) {
                        console.log(response.data);
                        const { username, email, password } = response.data;
                        // User.setUser({ Username: username, Email: email, Password: password });

                        Nav('/sign-in');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error, Failed to create account!');
                });
        } catch (error) {
            console.error('Error:', error);
            alert('Error, Failed to create account!');
        }
    };
    
    return (
        <div className="register">
            <div className="registerChild">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Register Account</h1><br />
                    <label for="user">Username: </label><br />
                    <input type="text" id="user" name="User" placeholder="JohnDoe64" value={userInfo.username} onChange={(e) => {
                        setUser(prev => {
                            return { ...prev, username: e.target.value }
                        })
                    }} required /><br />
                    <label for="email">Email: </label><br />
                    <input type="email" id="email" name="Email" placeholder="JohnDoe@gmail.com" value={userInfo.email} onChange={(e) => {
                        setUser(prev => {
                            return { ...prev, email: e.target.value }
                        })
                    }} required /><br />
                    <label for="password">Password: </label><br />
                    <input type="password" id="password" name="Pass" placeholder="Something" value={userInfo.password} onChange={(e) => {
                        setUser(prev => {
                            return { ...prev, password: e.target.value }
                        })
                    }} required /><br />
                    <button className="button">Sign up</button><br />
                    <a href="/sign-in" className="link">Have an account? <p className="sign">Sign </p></a>
                </form>
            </div>
        </div>
    )
}