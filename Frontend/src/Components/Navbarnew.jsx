
import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";
import Nextlogo from "../assets/Nextlogo.jpeg"
import { Link } from "react-router-dom";
export function Navbarnew() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "SignUp", href: "/signup" }
  ];

  // Generate streak data


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
         <div
              className="bg-gradient-to-r from-[#1c1a3b] to-[#379090] "
              // style={{
              //   backgroundImage: "url('/img/hero-2.png')", // Background
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   paddingTop: 0,
              //   marginTop: 0,
              // }}
            >
              
        
              {/* Navigation items and logo */}
            
              <div className="flex justify-between items-center text-sm font-extrabold text-white px-5 pt-1 pb-4">
                {/* Logo */}
                  <h1 className="text-xl">
                    NextStep
                  </h1>
              
                 <div className="ml-auto flex space-x-4 hidden md:flex pr-4 mt-4">
             
             <Link to="/">
  <button className="mt-2 text-md hover:text-black">Home</button>
</Link>
            <Link to="/about">
  <button className="mt-2 text-md hover:text-black">About</button>
</Link>

<Link to="/contact">
  <button className="mt-2 text-md hover:text-black">ContactUs</button>
</Link>
          <Button href="/Signup" className="hover:bg-blue-500" color="dark" pill>SignUp</Button>
        </div>
        
        
                {/* Desktop Navbar */}
                <div className="hidden md:flex gap-5">
                
                </div>
        
                <button
                  className="block md:hidden text-white text-2xl focus:outline-none"
                  onClick={toggleSidebar}
                >
                  &#9776; {/* Hamburger icon */}
                </button>
              </div>
        
              {/* Sidebar for Small Screens */}
              <div
                className={`fixed top-0 right-0 h-full bg-black text-white transform transition-transform ${
                  isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } w-2/3 z-50`}
              >
                <div className="flex flex-col h-full">
                  {/* Close Button */}
                  <button
                    className="text-2xl self-end p-4"
                    onClick={toggleSidebar}
                  >
                    &times; {/* Close icon */}
                  </button>
        
                  {/* Sidebar Navigation Items */}
                  <nav className="flex flex-col gap-5 mt-10 px-5">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href} // Use the correct URL
              className="py-2 hover:underline text-left text-lg"
              onClick={toggleSidebar}
            >
              {item.text}
            </a>
          ))}
        </nav>
                </div>
              </div>
        
              {/* Spiderman image with wind effect */}
           
            </div>
    )
}