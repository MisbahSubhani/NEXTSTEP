import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Animatedtitle = ({ title, containerClass }) => {
  // Reference for the title lines
  const textRef = useRef([]);

  useEffect(() => {
    // Animate each line of the title with a slide-in effect from below
    gsap.from(textRef.current, {
      y: 50, // Slide in from 50px below
      duration: 1,
      stagger: 0.1, // Delay between animations for each line
      ease: "power2.out", // Ease effect for smooth animation
    });
  }, []);

  return (
    <div className={`${containerClass} mt-4 text-xs text-white max-md:mt-10 w-2/5`}>
      <span className="text-6xl font-extrabold text-white">
        {title.split("<br/>").map((line, index) => (
          <div
            key={index}
            ref={(el) => (textRef.current[index] = el)} // Set ref to each line
          >
            {line}
          </div>
        ))}
      </span>
    </div>
  );
};

export default Animatedtitle;
