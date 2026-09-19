import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import MathOperations from "./components/MathOperations";
import UserProfile from "./components/UserProfile";

function App() {
  const [activeTab, setActiveTab] = useState("greeting");

  const tabs = [
    {
      id: "greeting",
      label: "Greeting",
      component: <Greeting name="your grace" />,
    },
    { id: "counter", label: "Counter", component: <Counter /> },
    {
      id: "profile",
      label: "Profile",
      component: <UserProfile />,
    },
    { id: "math", label: "Calculate", component: <MathOperations /> },
  ];

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          React Playground
        </h1>

        {/* Tab buttons */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active component */}
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200">
          {active?.component}
        </div>
      </div>
    </div>
  );
}

export default App;
