const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.port || 4000;
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const workoutRoutes = require("./routes/workoutRoutes.js");
const userRoutes = require("./routes/userRoutes.js");


app.use("/workouts", workoutRoutes);
app.use("/workoutuser", userRoutes);

mongoose.connect("mongodb+srv://Jtruje080:westmec@cluster0.spnluj0.mongodb.net/Gym")
    .then((x) =>{
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
    });

app.listen(port, () => {
    console.log('Server is running', port);
});