const mongoose = require ("mongoose");

const Schema = mongoose.Schema
const workoutSchema = new Schema({
    //defenition of property of model
        day :{
            type: Date, 
            default: new Date().setDate(new Date().getDate())
        },
        exercises : {
            type: Array 
        }
});

var Workout = mongoose.model("Workout",workoutSchema)

module.exports = Workout