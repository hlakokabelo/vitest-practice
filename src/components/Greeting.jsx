function Greeting({ name }) {
  const displayName = name || "World";

  return (
    <div className="rounded-2xl pt-14 pb-14  bg-white p-6 shadow-lg ring-1 ring-gray-200">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-3xl">👋</span>

        <h1 className="text-2xl font-bold text-gray-800">
          Hello, {displayName}!
        </h1>

        <p className="text-sm w-3/4 text-gray-900">
          This is a small practice app for exploring React components and
          automated testing with Vitest and React Testing Library.
        </p>

        <p className="text-xs  w-3/4 text-gray-600">
          Try the different components in the app, then check out the GitHub
          repository to see how they’re tested and how the CI workflow
          runs.{" "}
        </p>
      </div>
    </div>
  );
}

export default Greeting;
