import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../Store/useAuthStore.js';
import toast from 'react-hot-toast';
import { Loader2 } from "lucide-react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const Login = () => {

  const { isLoggingIn, login, authUser } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // useEffect(() => {
  //   console.log(authUser)
  // }, [])

  const validateFormData = (formData) => {

    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length !== 6) return toast.error("Password must be at least 6 characters");

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    const success = validateFormData(formData);
    if (success === true) {
      await login(formData, navigate);

    }

  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Poster Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto relative">
          <img
            src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace this with your image URL
            alt="Poster"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Login Form */}
        <div className="md:w-1/2 w-full p-8 md:ml-10">

          <div className='min-h-full w-full text-center border my-10 text-4xl md:text-5xl lg:6xl border-black'>
            <span className='text-black font-semibold'>
              Movies
            </span>
            <span className='text-red-500 font-semibold'>
              Baros
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
                name="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                name="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" disabled={isLoggingIn}
              >
                {
                  isLoggingIn ? (
                    <>
                      Loading...
                      <Loader2 className="size-5 animate-spin mx-auto" />
                    </>
                  ) : (
                    "LogIn"
                  )}
              </button>
              <div className='text-center'>
                <span>Don't have Account ? </span>
                <button className='text-blue-600 font-semibold text-center hover:underline'><Link to="/signup">Singup</Link></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
