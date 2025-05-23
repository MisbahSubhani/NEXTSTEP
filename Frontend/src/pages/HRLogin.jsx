import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbarnew } from "../Components/Navbarnew";
import axios from 'axios';
import backendUrl from "../api";
import { toast } from 'react-hot-toast';
import { SyncLoader } from "react-spinners";

export function HRLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const credentials = { email, password };

    try {
      const response = await axios.post(`${backendUrl}/hr/login`, credentials, {
        headers: { 'Content-Type': 'application/json' }
      });

      localStorage.setItem("authorization", response.data.token);
      toast.success('Login successful!');

      setTimeout(() => {
        setLoading(false);
        navigate('/HR/HrDashboard');
      }, 1500);

    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error(error.response.data.message || "Invalid Credentials");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbarnew />
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <SyncLoader color="#36d7b7" size={15} />
        </div>
      )}

      <div className="bg-gradient-to-r from-[#1c1a3b] via-[#903d37] to-[#903d37] flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-center bg-blue-700"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1606607291535-b0adfbf7424f?q=80&w=1974&auto=format&fit=crop)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl font-bold text-gray-600 text-center">Welcome back HR!</p>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="email"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                  type="password"
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center w-full text-center">
              <a
                href="/HR/signup"
                className="font-bold text-xs text-gray-500 capitalize text-center w-full"
              >
                Don&apos;t have an account yet?{" "}
                <span className="font-bold text-blue-700">Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
