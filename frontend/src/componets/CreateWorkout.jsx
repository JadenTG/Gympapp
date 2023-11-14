import React, { useEffect, useState } from "react";
import '../App.css'
import axios from "axios";
import { useUseData } from "../App";

function CreateWorkout() {
  const userData = useUseData();
  const [userForm, setUserForm] = useState({
    name: "",
    description: "",
    machinename: "",
    machinelink: "",
    imageurl: "",
    author: userData.username
  });

  const [image, setImage] = useState();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const cloudHandler = (e) => {
    const formData = new FormData();

    formData.append('file', e.target.files[0]);
    formData.append("upload_preset", 'Blogimages');

    axios.post(`https://api.cloudinary.com/v1_1/duu8wpnde/image/upload`, formData)
      .then((res) => {
        const imageurl = res.data.secure_url;
        userForm.imageurl = imageurl
        setImage(imageurl)
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    axios
      .post("https://gym-blog-backend.onrender.com/workouts/create-workout", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          description: "",
          machinename: "",
          machinelink: "",
          imageurl: "",
          author: userData.username
        });
      });
  };

  useEffect(() => { }, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label"> First & Last Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Machine Name</label>
            <input
              type="text"
              className="form-control"
              name="machinename"
              id="machinename"
              value={userForm.machinename}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Machine Link</label>
            <input
              type="text"
              className="form-control"
              name="machinelink"
              id="machinelink"
              value={userForm.machinelink}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Workout Description</label>
            <textarea rows={10} cols={40}
              type="textarea"
              className="form-control"
              name="description"
              value={userForm.description}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Workout Example</label>
            <input
              type="file"
              className="form-control"
              name="imageurl"
              id="imageurl"
              onChange={cloudHandler}
              onSubmit={inputsHandler}
            />
            <img src={image} className="w-50 h-50 mt-3" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary bg-black border-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkout;