import React from "react";
import { useState } from "react";
export default function App() {
  const [Count, setCount] = useState(0);
  const increment = (e) => {
    setCount(Count + 1);
  };
  const decrement = (e) => {
    setCount(Count - 1);
  };
  return (
    <div>

      <h1>Counter App</h1>
      <h3>Count: {Count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}