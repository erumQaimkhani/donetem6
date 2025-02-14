
"use client";
import React, { useState } from "react";

export default function GetTouch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-12 text-center flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
          Get in Touch
        </h2>
        <p className="text-lg text-white mt-4 opacity-90">
          For more information about our products and services, feel free to drop us an email.
          Our staff is always here to assist you. Do not hesitate to reach out!
        </p>

        <div className="w-full flex justify-center mt-8">
          <button
            onClick={openModal}
            className="w-48 h-12 bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-800"
          >
            Checkout
          </button>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal} // Close modal when clicking outside
            aria-hidden="true"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-xl w-96"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <h3 className="text-xl font-semibold mb-4">Checkout</h3>
              <p className="text-gray-700">Proceed with your checkout process.</p>
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
