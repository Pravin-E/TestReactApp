import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check (in real apps, use secure auth)
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded-2xl shadow-xl w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Testing Website</h1>
      <div className="overflow-x-auto">
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
              <td className="py-3 px-4">Cross-browser testing, Supports multiple languages</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">Cypress</td>
              <td className="py-3 px-4">Fast execution, Real-time reloads</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">Playwright</td>
              <td className="py-3 px-4">Multi-browser support, Easy setup</td>
            </tr>
            <tr className="border-t">
              <td className="py-3 px-4">TestCafe</td>
              <td className="py-3 px-4">No WebDriver, Parallel testing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
