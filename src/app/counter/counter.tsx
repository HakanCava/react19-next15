"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-emerald-300 p-20 flex flex-col gap-5">
      <h3>Count: {count}</h3>
      <button
        className="border border-cyan-400 p-2 bg-cyan-300 rounded-md"
        onClick={() => setCount((p) => p + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
