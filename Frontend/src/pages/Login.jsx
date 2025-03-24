import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbarnew } from "../Components/Navbarnew";
import axios from 'axios';
import backendUrl from "../api";
import { toast } from 'react-hot-toast';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    
    try {
      const response = await axios.post(`http://${backendUrl}/student/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      localStorage.setItem("authorization", response.data.token);
      
      // ✅ Show Success Toast
      toast.success('Login successful!');
  
      // Redirect
      navigate('/internship');
      
    } catch (error) {
      console.log(import.meta.env.VITE_SERVER_URL);
  
      // Display appropriate error toast
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
      <div className="bg-gradient-to-r from-[#1c1a3b] via-[#903d37] to-[#903d37] flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl font-bold text-gray-600 text-center">Welcome back students!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input onChange={(e) => setPassword(e.target.value)}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password" 
              />
            </div>
            <div className="mt-8">
              {message && <p className="login-error">{message}</p>}
              <button onClick={handleLogin} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center w-full text-center">
              <a
                href="/SignUp"
                className="font-bold text-xs text-gray-500 capitalize text-center w-full"
              >
                Don&apos;t have any account yet?
                <span className="font-bold text-blue-700"> Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
