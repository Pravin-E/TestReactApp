import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Home");

  const [env, setEnv] = useState("QA");
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setActiveTab("Home");
  };

  const togglePreference = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const renderContent = () => {
    if (activeTab === "Home") {
      return (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold">Welcome, {username || "User"}!</h2>
          <p className="text-gray-600">
            Here's a quick summary of your dashboard and settings:
          </p>

          <div className="bg-gray-50 p-4 rounded-xl border">
            <h3 className="font-semibold mb-2">Preferred Testing Environment:</h3>
            <div className="flex gap-4">
              {["QA", "Staging", "Production"].map((envOption) => (
                <label key={envOption} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="env"
                    value={envOption}
                    checked={env === envOption}
                    onChange={() => setEnv(envOption)}
                  />
                  <span>{envOption}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border">
            <h3 className="font-semibold mb-2">Preferences:</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.notifications}
                  onChange={() => togglePreference("notifications")}
                />
                <span>Enable Notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.darkMode}
                  onChange={() => togglePreference("darkMode")}
                />
                <span>Enable Dark Mode</span>
              </label>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "Tools") {
      return (
        <div className="overflow-x-auto mt-4">
          <table className="w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="py-3 px-4">Automation Tool</th>
                <th className="py-3 px-4">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4">Selenium</td>
                <td className="py-3 px-4">Cross-browser testing, Multi-language support</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Cypress</td>
                <td className="py-3 px-4">Fast execution, Real-time reloads</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Playwright</td>
                <td className="py-3 px-4">Headless browser automation, Parallel testing</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">TestCafe</td>
                <td className="py-3 px-4">No WebDriver needed, Stable selectors</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === "AI") {
      return (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">AI Tools for Testing</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>
              <strong>Testim.io</strong> – Uses machine learning to create and maintain stable UI tests.
            </li>
            <li>
              <strong>Functionize</strong> – AI-powered test creation with natural language processing.
            </li>
            <li>
              <strong>Applitools</strong> – Visual AI for automated visual regression testing.
            </li>
            <li>
              <strong>mabl</strong> – Intelligent, self-healing test flows with real-time analytics.
            </li>
          </ul>
        </div>
      );
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-indigo-200">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-xl w-80">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded-xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {["Home", "Tools", "AI"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-white font-medium transition-all ${
                activeTab === tab ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
}

export default App;
