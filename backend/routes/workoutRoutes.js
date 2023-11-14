const express = require('express');
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");
const workoutSchema = require("../models/workout.js");
const router = express.Router();

router.post('/create-workout', async (req, res) => {
    console.log(req.body)

    await workoutSchema.create(req.body)
        .then(result => {
            res.json({
                data: result,
                message: "It Works",
                status: 200
            });
        })
        .catch(err => console.log(err));
    //res.redirect('/');*/
});

router.get("/", async (req, res) => {
    await workoutSchema.find()
        .then((result) => {
            res.json({
                data: result,
                message: "All Posts Fetched",
                status: 200
            })
        })
        .catch((err) => {
            console.log(err);
        });
})

router.get("/get/:id", async (req, res) => {
    await Workout.findById(req.params.id)
        .then((resault) => {
            res.json({
                data: resault,
                message: "Data fetched",
                status: 200
            })
        }).catch((err) => {
            console.log(err);
        });
})

router.get("/getfromuser/:username", async (req, res) => {
    let username = req.params.username;

    await Workout.find({ author: username }).then(result => {
        res.json({
            data: result,
            message: "Data fetched",
            status: 200
        })
    })
})

module.exports = router;