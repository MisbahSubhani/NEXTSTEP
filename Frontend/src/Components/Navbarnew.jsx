import React, { useState } from "react";
import { Button } from "flowbite-react";
import Nextlogo from "../assets/Nextlogo.jpeg";
import { Link } from "react-router-dom";

const navItems = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Internships", href: "/internship" },
  { text: "Contact Us", href: "/contact" },
  { text: "SignUp", href: "/signup" },
];

export function Navbarnew() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderNavItems = () => {
    return navItems.map((item) => (
      <Link key={item.href} to={item.href}>
        <button className="mt-2 text-md hover:text-black">{item.text}</button>
      </Link>
    ));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#1c1a3b] to-[#379090]">
        {/* Navigation items and logo */}
        <div className="flex justify-between items-center text-sm font-extrabold text-white px-5 pt-1 pb-4">
          {/* Logo */}
          <h1 className="text-xl">NextStep</h1>

          <div className="ml-auto flex space-x-4 hidden md:flex pr-4 mt-4">
            {renderNavItems()}
          </div>

          {/* Hamburger icon for mobile */}
          <button
            className="block md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transform transition-transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} w-2/3 z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <button className="text-2xl self-end p-4" onClick={toggleSidebar}>
            &times;
          </button>

          {/* Sidebar Navigation Items */}
          <nav className="flex flex-col gap-5 mt-10 px-5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="py-2 hover:underline text-left text-lg"
                onClick={toggleSidebar}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}