import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Navbarnew } from "./Navbarnew";
export function Header() {
  const streaks = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: Math.random() * 100, 
    delay: Math.random() * 2, 
  }));
  return (
    <div
      className="relative w-full mt-0 object-cover"
      style={{
        backgroundImage: "url('/img/hero-2.png')", // Background
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: 0,
        marginTop: 0,
      }}
    >
      
    <Navbarnew/>  
     


    

      {/* Spiderman image with wind effect */}
      <div className="absolute mt-[2px] right-0">
        <div className="relative h-[885.25px] w-[800px]">
          <img
            src="/img/hero-1.jpg"
            alt="Hero Section"
            className="h-full w-full object-cover"
          />
          {/* Wind-blowing overlay */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none wind-overlay">
            {streaks.map((streak) => (
              <div
                key={streak.id}
                className="wind-streak"
                style={{
                  left: `${streak.left}%`, // Random horizontal position
                  animationDelay: `${streak.delay}s`, // Staggered animation
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
