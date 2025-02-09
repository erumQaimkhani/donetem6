
// "use client";
// import React, { useState } from "react";
// import Pay from "../components/pay";
// import Footer from "../components/footer";
// import Billing from "../components/billing";

// export function GetTouch() {  //  Renamed for consistency
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-12 text-center flex items-center justify-center">
//       <div className="max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
//         <h2 className="text-4xl font-extrabold text-white drop-shadow-md">Get in Touch</h2>
//         <p className="text-lg text-white mt-4 opacity-90">
//           For more information about our products and services, feel free to drop us an email.
//           Our staff is always here to assist you. Do not hesitate to reach out!
//         </p>

//         <div className="w-full flex justify-center mt-8">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="w-48 h-12 bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-800"
//           >
//             Checkout
//           </button>
//         </div>

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//               <h3 className="text-xl font-semibold mb-4">Checkout</h3>
//               <p className="text-gray-700">Proceed with your checkout process.</p>
//               <button
//                 onClick={() => setIsModalOpen(false)}
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

// export default function Contact() {
//   return (
//     <>
//       <main>
//         <Billing />
//         <Pay />
//         <GetTouch />  {/*  Now using GetTouch inside Contact */}
//       </main>
//       <Footer />
//     </>
//   );
// }
import React from 'react'

export default function discount() {
  return (
    <div> hello</div>
  )
}
