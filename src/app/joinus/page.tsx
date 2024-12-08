import React from "react";
import Header from "../component/header";
import Header2 from "../component/header2";
import Header3 from "../component/header3";
export default function Joinus(){
  return (
    <>
    <Header />
      <Header2/>
      <Header3 />
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
        {/* Logo and Heading */}
        <div className="flex items-center mb-6">
          {/* <img
            src="/nike-logo.png" // Replace this with your Nike logo URL
            alt="Nike Logo"
            className="w-12 h-12"
          /> */}
          <h1 className="ml-4 text-xl font-semibold text-gray-800">Welcome Back</h1>
        </div>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
                id="keep-signed-in"
                className="rounded focus:ring-2 focus:ring-black"
              />
              <label htmlFor="keep-signed-in" className="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          {/* Additional Text */}
          <p className="mb-4 text-sm text-gray-600">
            By signing in, you agree to our terms and policies.
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-black rounded-md hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Join us
          </a>
        </p>
      </div>
    </div>
    </>
  );
}