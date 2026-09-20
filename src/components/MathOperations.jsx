import React, { Fragment, useState } from "react";

function MathOperations() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
  };

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    setResult(operations[operation](a, b));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 pt-14 pb-14 shadow-lg ring-1 ring-gray-200">
      <div className="flex  justify-center items-center gap-2">
        <input
          type="number"
          value={num1}
          data-testid="num1"
          onKeyDown={handleKeyDown}
          onChange={(e) => setNum1(e.target.value)}
          className="w-20 border border-gray-400 text-center py-0.5"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="border border-gray-400 px-1 py-0.5"
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input
          type="number"
          value={num2}
          data-testid="num2"
          onKeyDown={handleKeyDown}
          onChange={(e) => setNum2(e.target.value)}
          className="w-20 border border-gray-400 text-center py-0.5"
        />

        <button
          onClick={handleCalculate}
          className="cursor-pointer border rounded-[5px] hover:bg-blue-300 border-gray-900 px-2 py-0.5"
        >
          =
        </button>

        <div data-testid="result" className="flex justify-center pl-2">
          {result}
        </div>
      </div>
    </div>
  );
}

export default MathOperations;
