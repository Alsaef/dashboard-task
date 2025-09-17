'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars, FaFlag } from "react-icons/fa";


const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
      const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
              <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-gray-100 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo */}
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          MyDashboard
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <FaHome /> <span>Home</span>
          </Link>
          <Link
            href="/users"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <FaUser /> <span>Users</span>
          </Link>
          <Link
            href="/posts"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <FaFlag /> <span>Posts</span>
          </Link>
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-gray-700">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-gray-800 transition">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Topbar */}
        <div className="bg-gray-100 p-4 flex items-center md:hidden">
          <button
            className="text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={24} />
          </button>
          <h1 className="ml-4 text-xl font-bold">Dashboard</h1>
        </div>

        {/* Main Content */}
        <main className="p-6 bg-gray-100 min-h-screen">
         
          <div className="mt-2 ">
            {children}
          </div>
        </main>
      </div>
    </div>
        </div>
    );
};

export default SideBar;


