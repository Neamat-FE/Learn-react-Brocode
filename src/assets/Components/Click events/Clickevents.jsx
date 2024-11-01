import React from "react";

function Clickevents() {
  let count = 0;
  const handleCLick = (name) => {
    if (count <= 3) {
      console.log(`${name} You Clicked ${count} Times.`);
      count++;
    } else {
      console.log(`${name} Stop Clicking Me..`);
    }
  };
  return (
    <div className="container">
      <button onClick={() => handleCLick("Nemat")}>Click Here</button>
    </div>
  );
}

export default Clickevents;
