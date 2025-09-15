import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../Config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = cred.user.uid;

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      await setDoc(doc(db, "SigninUsers", uid), {
        username: name,
        useremail: email,
      });

      localStorage.setItem("userUID", uid);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error("This User Alredy Exists !");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

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

          <div>
            <label className="block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              required
              className="w-4 h-4 mt-1 mr-2 rounded"
            />
            <label className="text-sm">
              I accept the
              <span className="text-blue-600 cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded py-2 hover:bg-blue-700 disabled:opacity-50"
          >
            Create Account
          </button>

          <p className="text-sm text-center">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
