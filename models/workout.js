const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is required"
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is required"
        },
        duration: {
          type: Number,
          required: "Exercise duration is required"
        },
        weight: {
          type: Number,
          required: "Enter weight"
        },
        reps: {
          type: Number,
          require: "Enter number of Reps."
        },
        sets: {
          type: Number,
          required: "Enter sets"
        },
        distance: {
          type: Number,
          required: "Enter number of sets"
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;