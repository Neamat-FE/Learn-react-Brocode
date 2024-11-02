import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };

  return (
    <div className="container mb-3">
      <h2 className=""> {count}</h2>
      <button onClick={reset}>Reset value</button>
      <button onClick={decrement} disabled={count === 0 ? true : false}>
        Decrement
      </button>
      <button onClick={increment} disabled={count === 8 ? true : false}>
        Increment+
      </button>
    </div>
  );
}

export default Counter;
