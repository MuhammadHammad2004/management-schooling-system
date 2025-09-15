import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Config/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("userUID", user.uid);

      toast.success("Logged in successfully!");

      navigate("/");
    } catch (err) {
      toast.error("This User Never Exsist");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded py-2 hover:bg-blue-700 disabled:opacity-50"
          >
            Login
          </button>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-600 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
