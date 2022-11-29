import React from "react";
import { MdDelete } from "react-icons/md";

const WorkoutDetails = ({ workout }) => {
  const handleDelete = () => {
    const response = fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = response.json();

    if (response.ok) {
      console.log("Exercise Deleted", json);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span>
        <MdDelete onClick={handleDelete} size="1.5em" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
