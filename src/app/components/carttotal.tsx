
import React from "react";
import Image from "next/image";

interface CartTotalProps {
  items: { image: string; name: string; price: number; quantity: number }[];
  subtotal: number;
  total: number;
  onCheckout: () => void;
}

export default function CartTotal({ items = [], subtotal = 0, total = 0, onCheckout }: CartTotalProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <div className="w-full max-w-[1240px] mx-auto mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">Shopping Cart</h2>

          {/* Cart Items */}
          {items.length > 0 ? (
            items.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border-b last:border-none">
                <div className="flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg shadow-sm" />
                  <div>
                    <span className="text-lg font-medium text-gray-700">{item.name}</span>
                    <p className="text-sm text-gray-500">Rs. {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Qty:</span>
                  <span className="px-3 py-1 border rounded-md text-gray-700">{item.quantity}</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">Rs. {item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-[400px] mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Totals</h2>
          <div className="flex justify-between text-lg font-medium mb-2">
            <span>Subtotal</span>
            <span className="text-gray-600">Rs. {subtotal}</span>
          </div>
          <div className="flex justify-between text-xl font-semibold mb-4">
            <span>Total</span>
            <span className="text-green-600">Rs. {total}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
