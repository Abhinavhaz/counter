import React, { useState } from "react";

function Counter() {
  const [valueOfCount, setValueOfCount] = useState(0);

  const handleIncrement = () => {
    setValueOfCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValueOfCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {valueOfCount}</p>
      <button name="Increment" onClick={handleIncrement}>
        Increment
      </button>
      <button name="Decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
