import React from "react";

const items = ["Dhaka", "New York", "Delhi"];

function Array() {
  return (
    <div className="container">
      <h2 className="list-unstyled mt-4 ">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </h2>
    </div>
  );
}

export default Array;
