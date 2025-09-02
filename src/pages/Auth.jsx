import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login, currentUser } = useAuth();

 
  if (currentUser) navigate("/");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.username === username)) {
      setError("User already exists!");
      return false;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    setIsLogin(true);
    setUsername("");
    setPassword("");
    setError("Signup successful! Please login.");
    return true;
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      login(user); // Context + localStorage
      navigate("/"); // Redirect to home
      return true;
    } else {
      setError("Invalid credentials!");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    isLogin ? handleLogin() : handleSignup();
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow">
      {/* Toggle buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 p-2 ${
            isLogin ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 p-2 ${
            !isLogin ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Signup
        </button>
      </div>

      <h2 className="text-2xl mb-4 text-center">
        {isLogin ? "Login" : "Signup"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className={`p-2 text-white rounded ${
            isLogin ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default Auth;