import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../../lib/appwrite/api';

// Adjust the path to where your createAccount function is located
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAccount(email, username, password);
      console.log(response); // Handle the response as needed

      if (response.$id) { // Assuming response contains user ID in $id
        localStorage.setItem('userId', response.$id);
        alert('User created successfully!');
        navigate('/');
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      console.error(error); // Handle the error as needed
      alert('Error creating user');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-0 dark:text-gray-200">Welcome Back!</h1>
        <p className="text-center text-xs text-cyan-700">Register New User</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="shadow-sm dark:bg-zinc-900 dark:text-white rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="shadow-sm dark:bg-zinc-900 dark:text-white rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="shadow-sm dark:bg-zinc-900 dark:text-white rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-[3%]"
          >
            Create Account
          </button>
          <Link to="/sing-in" className="text-[15px] ml-[32%] text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login Account</Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
