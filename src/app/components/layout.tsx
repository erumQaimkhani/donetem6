// components/Layout.tsx
import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link href="/orders">Orders</Link>
          </li>
          <li className="mb-4">
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default Layout;
