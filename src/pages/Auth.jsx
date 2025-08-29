import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // adjust path if needed

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login and signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- get login function from context

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.username === username)) {
      alert("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    setIsLogin(true); // switch to login form
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      login(user); // <-- update AuthContext
      alert("Login successful!");
      navigate("/"); // redirect to home or another route
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleSignup();
  };

  return (
    <div className="max-w-md mx-auto p-4">
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

      <h2 className="text-2xl mb-4">{isLogin ? "Login" : "Signup"}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2"
        />
        <button
          type="submit"
          className={`p-2 text-white ${
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
