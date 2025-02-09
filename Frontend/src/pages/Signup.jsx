import React from 'react';
import { useState } from 'react';
import toast from "react-hot-toast"
import { useAuthStore } from '../Store/useAuthStore.js';
import { Eye, EyeClosed, EyeIcon, EyeOff, Loader2 } from "lucide-react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const SignupPage = () => {

  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: ""
  })

  const validateFormData = (formData) => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length !== 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateFormData(formData);

    if (success === true) {
      await signup(formData, navigate);
    }

  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">

      {/* Signup Form */}
      <div className="absolute md:relative top-1/4 md:top-0 left-1/4  md:left-0 md:w-1/2 md:h-full md:flex md:flex-col md:justify-center md:items-center p-8 bg-white bg-opacity-80 md:bg-opacity-100">

        <div className='px-4 mx-w-md text-center border my-10 text-4xl md:text-5xl lg:6xl border-black'>
          <span className='text-black font-semibold'>
            Movies
          </span>
          <span className='text-red-500 font-semibold'>
            Baros
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg shadow appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-double focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="rounded-lg shadow appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-double focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Password </label>
            <div className="relative">
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type={showPassword ? "text" : "password"}
                name="password" placeholder="Password"
                className="rounded-lg shadow appearance-none border w-full py-2 px-3 text-gray-400 leading-tight focus:outline-double focus:shadow-outline" />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" >
                {showPassword ? <EyeIcon className='size-5' /> : <EyeOff className='size-5' />}
              </button>
            </div>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-double w-full"
              disabled={isSigningUp}
            >{
                isSigningUp ? (
                  <>
                    Loading...
                    <Loader2 className="size-5 animate-spin mx-auto" />
                  </>
                ) : (
                  "Create Account"
                )}
            </button>

            <div className='text-center'>
              <span>Already Have Account </span>
              <button className='text-blue-600 font-semibold text-center hover:underline'><Link to="/login">Login</Link></button>
            </div>

          </div>
        </form>

      </div>

      {/* Poster Image */}
      <div className="md:w-1/2 h-1/2 md:h-full relative">
        <img
          src="https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace this with your poster image URL
          alt="Poster"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignupPage;
