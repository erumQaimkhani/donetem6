"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import Modal from "./modal";
import Checkout from "./checkout1";
import Convertecurrency from "./convertcurrency";


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

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            {/* Image Section */}
            <div className="mb-6">
              <Image
                src="/Rectangle 14.jpg" // Ensure the correct path
                alt="Product Image"
                width={800} 
                height={300} 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Checkout Section */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase! Please fill out the form below to complete
              your order.
            </p>
            
            {/* Checkout and Payment Components */}

        <Checkout />
        <Convertecurrency />
          </div>
        </Modal>
      </div>
    </div>
  );
}
