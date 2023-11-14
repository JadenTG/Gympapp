const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: String,
    description: String,
    machinename: String,
    machinelink: String,
    imageurl: String,
    author: String
}, {
    collection: "workouts",
    timestamps: {
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
      }
})

module.exports = mongoose.model("workouts", workoutSchema);