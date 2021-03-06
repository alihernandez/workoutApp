const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
        trim: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
    {
      toJSON: {
        // include any virtual properties when data is requested
        virtuals: true,
      },
    },
  ],
});
const Workout = mongoose.model("Workout", workoutSchema);
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
module.exports = Workout;