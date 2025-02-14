"use client";
import React, { useState } from "react";

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const openModal = () => setIsModalOpen(true);
  // Close Modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6">
      <button
        onClick={openModal}
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg transform transition hover:scale-105"
      >
        Sign Up
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Clicking outside will close modal
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Sign Up</h2>

            {/* Signup Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Create Account
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

