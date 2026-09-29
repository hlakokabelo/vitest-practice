import { useState } from "react";
const userID = Math.floor(Math.random() * 10 + 1);

function UserProfile() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    if (!userID) return;
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  if (!user) {
    fetchUser();
    return (
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-indigo-500" />
          <span className="text-sm font-medium">Loading profile…</span>
        </div>
      </div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition hover:shadow-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-lg font-semibold text-white shadow-md">
            {initials}
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-gray-900">
              {user.name}
            </h2>
            <p className="truncate text-sm text-gray-500">@{user.username}</p>
          </div>
        </div>

        <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              ✉
            </span>
            <span className="truncate text-gray-700">{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              ☎
            </span>
            <span className="truncate text-gray-700">{user.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              ⌂
            </span>
            <span className="truncate text-gray-700">{user.address?.city}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              👤
            </span>
            <span className="truncate text-gray-700">ID - {userID}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
