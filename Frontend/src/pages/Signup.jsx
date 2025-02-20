import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
export function SignUp() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const navigate = useNavigate();


 

  return (
    <div className="bg-gradient-to-r from-[#1c1a3b] via-[#903d37] to-[#903d37] flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700 "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1617251137884-f135eccf6942?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl  font-bold text-gray-600 text-center">Create An Account!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input  onChange={(e)=>setEmail(e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input  onChange={(e)=>setPassword(e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
            {/* <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a> */}
          </div>
          <div className="mt-8">
            <button onClick={async()=>{
          const response =  await  axios.post("http://localhost:3000/api/v1/user/signup",{
            email,
            password
          })
          localStorage.setItem("token", response.data.token)
            alert("Login Successfully.")
            navigate("/signin")
            }} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Create Account
            </button>
            <GoogleLogin
        onSuccess={(response) => {
          console.log("Login Success:", response);
          navigate("/"); // Redirect to home after login
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
            
          </div>
          
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/signin"
              className="font-bold text-xs text-gray-500 capitalize text-center w-full"
            >
              Have an account ?
              <span className="font-bold text-blue-700"> Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

