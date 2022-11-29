const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();

//midleware: to run on every request it gets and next so that it doesnt stops after completing one request
app.use(express.json()); // any request comes, it looks for if there is a body to the request(some data) and if it does, it passes it and attaches it to the request object so that we can access it in the request handler

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

//Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listerning for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/workouts", getAllWorkout);
