import React from "react";

function Greeting({ name }) {
  const displayName = name || "World";

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-3xl">👋</span>
      <h1 className="text-2xl font-bold text-gray-800">
        Hello, {displayName}!
      </h1>
      <p className="text-sm text-gray-500">Welcome back — good to see you.</p>
    </div>
  );
}

export default Greeting;
