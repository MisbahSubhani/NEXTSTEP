
import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";
import Logo from "../assets/FinalLogo.png"
import { Link } from "react-router-dom";
import { Profile } from "./Profile";

export function DashboardNav() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
    { text: "LogOut", href: "/" }

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
               <h1 className="text-xl ml-2 font-sans"> NextStep</h1>
              
                 <div className="ml-auto flex space-x-4 hidden md:flex pr-4 mt-4">
             
             <Link to="/">
  <button className="mt-4 text-md hover:text-black">Home</button>
</Link>
            <Link to="/about">
  <button className="mt-4 text-md hover:text-black">About</button>
</Link>

<Link to="/contact">
  <button className="mt-4 mr-8 text-md hover:text-black">Contact Us</button>
</Link>
          <Profile/>
        </div>
        
        
                {/* Desktop Navbar */}
                <div className="hidden md:flex gap-5">
                
                </div>
                <div  className=" flex flex-row-reverse w-24 md:hidden">
              <Profile/>
              </div>
                
              </div>
             
        
              {/* Sidebar for Small Screens */}
            
        
              {/* Spiderman image with wind effect */}
           
            </div>
    )
}