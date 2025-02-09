
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
        
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Total Sales</h3>
            <p className="text-2xl">$3,200</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Active Users</h3>
            <p className="text-2xl">1200</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Revenue Today</h3>
            <p className="text-2xl">$500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
