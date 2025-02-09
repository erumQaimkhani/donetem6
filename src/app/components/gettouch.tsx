

// "use client";

// import React, { useState } from "react";
// import Modal from "./modal";
// import Checkout from "./checkout1";

// export default function GetTouch() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imageSrc, setImageSrc] = useState<string | null>(null);

//   const openModal = (image: string) => {
//     setImageSrc(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setImageSrc(null);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 p-6">
//       <div className="max-w-3xl bg-white bg-opacity-20 backdrop-blur-xl shadow-2xl rounded-3xl p-10 text-center border border-white border-opacity-30">
//         <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
//           Get in Touch
//         </h2>
//         <p className="text-lg text-white mt-4 opacity-90">
//           Need more information about our products & services? Feel free to reach out! 
//           Our team is always here to help.
//         </p>

//         <div className="mt-6">
//           <button
//             onClick={() => openModal("/images/Plain console_ 1.png")}
//             className="w-full text-indigo-700 font-semibold py-5 px-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-indigo-700 hover:text-slate-500 hover:shadow-2xl"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={imageSrc || ""}>
//         <div className="p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform scale-95 hover:scale-100">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>
//           <p className="text-gray-600 mb-6">
//             Thank you for your purchase! Fill out the form below to complete your order.
//           </p>
//           <Checkout />
//         </div>
//       </Modal>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Gettouch() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-12 text-center flex items-center justify-center">
//       <div className="max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
//         <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
//           Get in Touch
//         </h2>
//         <p className="text-lg text-white mt-4 opacity-90">
//           For more information about our products and services, feel free to drop us an email.
//           Our staff is always here to assist you. Do not hesitate to reach out!
//         </p>

//         <div className="w-full flex justify-center mt-8">
//           <button
//             onClick={openModal}
//             className="w-48 h-12 bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-800"
//           >
//             Checkout
//           </button>
//         </div>

//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h3 className="text-xl font-semibold mb-4">Checkout</h3>
//               <p className="text-gray-700">Proceed with your checkout process.</p>
//               <button
//                 onClick={closeModal}
//                 className="mt-4 w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
export default function Gettouch() {
  return <div>Contact Us</div>;
}
