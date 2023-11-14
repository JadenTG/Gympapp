const express = require('express');
const mongoose = require("mongoose");
const workoutuser = require("../models/user.js");
const workoutUserSchema = require("../models/workout.js");
const router = express.Router();
const bcrypt = require('bcrypt')
router.post('/sign-in', async (req, res) => {

    console.log(req.body);
    await workoutuser.findOne({ username: req.body.username })
        .then(result => {
            bcrypt.compare(req.body.password, result.password, (err, isMatching) => {
                console.log(isMatching);

                if (isMatching) {
                    return res.json({
                        data: result,
                        message: "ok",
                        status: 200
                    })
                } else {
                    return res.status(401).send({ message: "Invalid Password" });
                }
            });

        }).catch(err => {
            console.log(err);
            res.json({
                message: err
            })
        });
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10)
    await workoutuser
    try {
        const newUser = await workoutuser.create(req.body);
        res.json({
            data: newUser,
            message: "User registered successfully",
            status: 200
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Registration failed",
            error: err
        });
    }
});

router.get("/", async (req, res) => {
    await workoutUserSchema.find()
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
    await workoutuser.findById(req.params.id)
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

module.exports = router;