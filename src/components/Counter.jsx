import React from "react";
import { useCounter } from "../hooks/useCounter.js";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-4xl font-bold text-white shadow-lg ring-4 ring-indigo-100">
          <p data-testid="counter-value">{count}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={increment}
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95"
          >
            + Increment
          </button>
          <button
            onClick={decrement}
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95"
          >
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
