import React from "react";
import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student container">
      <p>Student Name : {props.name}</p>
      <p>Student Age : {props.age}</p>
      <p>Student Roll : {props.roll}</p>
      <p>
        He is a Student :
        {props.isStudent
          ? "yes, He is Our Student"
          : "No, He is not Our Student"}{" "}
        {/*Props for Student Component With Ternary Operator*/}
      </p>
    </div>
  );
}

(Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  roll: PropTypes.number,
  isStudent: PropTypes.bolean,
}),
  (Student.defaultProps = {
    name: "Guest",
    age: 0,
    roll: 0,
    isStudent: false,
  });

export default Student;
