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

  return (
    <div className="flex justify-center flex-col gap-2">
      <div className="flex  justify-center items-center gap-2">
        <input
          type="number"
          value={num1}
          data-testid="num1"
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
          onChange={(e) => setNum2(e.target.value)}
          className="w-20 border border-gray-400 text-center py-0.5"
        />

        <button
          onClick={handleCalculate}
          className="border cursor-pointer border-gray-400 px-2 py-0.5"
        >
          =
        </button>
      </div>

      <div data-testid="result" className="flex justify-center">
        Result: {result}
      </div>
    </div>
  );
}

export default MathOperations;
