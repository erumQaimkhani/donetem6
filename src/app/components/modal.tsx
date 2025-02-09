
"use client";

import React from "react";
import Image from "next/image"; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  imageSrc?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Modal Image"
            width={800} 
            height={400} 
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
