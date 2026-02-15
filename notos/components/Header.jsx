import {
  getUserData,
  getPreferedName,
  getEmail,
  checkSessionActive,
} from "../app/lib/supabase";
import "../app/styles/headers.css";

export function Header({ email, perfName }) {
  if (!email) {
    return (
      <header className="header">
        <p>Please login!</p>
        {/* Buttons */}
        <div className="right-side">
          <button className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition">
            <a href="/auth/login?screen_hint=signup">Signup</a>
          </button>

          <button className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition">
            <a href="/auth/login">Login</a>
          </button>
        </div>
      </header>
    );
  }

  return (
    <div>
      <header className="header">
        <p>User: {perfName}</p>
        {/* Buttons */}
        <div className="right-side">
          <button
            onClick={() => addTasks()}
            className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
          >
            Create Balloons
          </button>

          <button className="px-5 py-2 bg-white text-gray-800 rounded-xl text-base font-medium hover:bg-gray-400 transition">
            Settings
          </button>

          <button className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition">
            <a href="/auth/logout">Logout</a>
          </button>
        </div>
      </header>
    </div>
  );
}
