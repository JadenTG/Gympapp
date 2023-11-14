import React, { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateWorkout from "./componets/CreateWorkout";
import DisplayWorkout from "./componets/DisplayWorkout";
import SignIn from "./componets/SignInPage";
import Register from "./componets/Register";
import Profile from "./componets/Profile";

const userData = {
  username: "",
  email: "",

  setUsername: () => { },
  setEmail: () => { }
}

const userContext = createContext(userData);

function UserDataProvider(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <userContext.Provider value={{ username: username, email: email, setUsername, setEmail }}>
      {props.children}
    </userContext.Provider>
  )
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Workout Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/sign-in"} className="nav-link">
                  Sign In
                </Link>
              </li><br />
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign up
                </Link>
              </li><br />
              <li className="nav-item">
                <Link to={"/create-workout"} className="nav-link">
                  Create Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <UserDataProvider>
        <div className="container mt-5">
          <div className="wrapper">
            <Routes>
              <Route exact path="/create-workout" element={<CreateWorkout />} />
              <Route exact path="/" element={<DisplayWorkout />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/sign-in" element={<SignIn />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </UserDataProvider>
    </div>
  );
}

export function useUseData() {
  return useContext(userContext);
}

export default App;