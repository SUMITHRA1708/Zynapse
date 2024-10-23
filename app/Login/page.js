"use client";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from '../constants/constant';
import { useRouter } from 'next/navigation'; 
import Navbar from "../Components/Navbar"
import Link from 'next/link';
export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseurl}/api/users/login`, formData);
      
      if (response.status === 200) {
        toast.success('Login successful! Redirecting to dashboard...', {
          position: 'top-right',
        });

        setTimeout(() => {
          router.push('/Dashboard'); 
        }, 2000); 
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className=" min-h-screen bg-gray-100">
      <Navbar/>
      <div className="flex justify-center mt-10 items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <p className="mt-4">
          New user? <Link href="/Signup" className="text-blue-500">Please signup</Link>
        </p>
        </form>

        <ToastContainer />
      </div>
      </div>
    </div>
  );
}
