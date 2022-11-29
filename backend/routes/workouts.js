const express = require("express");
const Workout = require("../models/workoutModel");

const {
  getAllWorkout,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
  createWorkout,
} = require("../controllers/workoutsController");

const router = express.Router();

//Get all workouts
router.get("/", getAllWorkout);

//Get Single workout
router.get("/:id", getSingleWorkout);

//post a new workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
