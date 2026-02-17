import React from "react";

function StudentCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        boxShadow: "10px 10px 5px grey",
        textAlign: "center"
      }}
    >
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Roll Number:</strong> {props.rollNo}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

export default StudentCard;
