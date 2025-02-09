"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
export default function CheckoutModal() {
  const [showForm, setShowForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <Header />

      <Image
        src="/images/decorative.png"
        alt="Product"
        height={400}
        width={400}
        className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition h-{500} w-{500}"
        onClick={() => setShowForm(true)}
      />
      {showForm && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <Card className="w-96 p-6 bg-white rounded-lg shadow-xl">
            {isSuccess ? (
              <div className="text-center text-green-600 font-bold text-lg">
                Checkout Successful!
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4">
                <Label>Name</Label>
                <Input type="text" required placeholder="Enter your name" />
                <Label>Email</Label>
                <Input type="email" required placeholder="Enter your email" />
                <Button type="submit" className="w-full" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Checkout"}
                </Button>
              </form>
            )}
            <Button variant="ghost" className="w-full mt-2" onClick={() => setShowForm(false)}>
              Close
            </Button>
          </Card>
          
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
