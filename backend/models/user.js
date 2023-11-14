const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutuserSchema = new Schema({
    username:String,
    email: String,
    password: String,
}, {
    collection: "workoutuser",
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at' 
      }
})

module.exports = mongoose.model("workoutUser", workoutuserSchema);