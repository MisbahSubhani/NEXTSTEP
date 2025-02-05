
import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";

export function Navbarnew() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
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
              className="bg-gradient-to-r from-[#020024] via-[#020024] to-[#386060] relative w-full mt-0 object-cover  border-b-2 border-white"
              // style={{
              //   backgroundImage: "url('/img/hero-2.png')", // Background
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   paddingTop: 0,
              //   marginTop: 0,
              // }}
            >
              
        
              {/* Navigation items and logo */}
              <div className="flex justify-between items-center text-xs font-extrabold text-white px-5 pt-1 pb-4">
                {/* Logo */}
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/d6a4942175374e7baf2a6d7a60f38356/9e4c92cc924b7f3833c502e606bf80cbd1ba42e2ad5f2321efc06f9a47e95686?apiKey=d6a4942175374e7baf2a6d7a60f38356&"
                  alt="NextStep Logo"
                  className="object-contain shrink-0 rounded-3xl aspect-[0.85] w-[60px] "
                /> */}
                 <div className="ml-auto flex space-x-4 hidden md:flex pr-4 mt-4">
                 <Button className="bg-stone-950 hover:bg-blue-600" href="/about" color="dark" pill>
  About Us
</Button>

          <Button className="bg-stone-950 hover:bg-blue-600" href="/contact" color="dark" pill>
            Contact Us
          </Button>
          <Button className="bg-stone-950 hover:bg-blue-600"  href="/signup" color="dark" pill>
            SignUp
          </Button>
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