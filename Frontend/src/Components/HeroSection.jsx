import React, { useEffect } from 'react'; 
import Button from './buttons/Button';  
import Animatedtitle from './Animatedtitle';
import { gsap } from 'gsap';

export function HeroSection() {
  useEffect(() => {
    // Animate Hero Title with a slide-in effect from left and opacity transition
    gsap.fromTo(
      '.hero-title',
      { x: -200, opacity: 0 }, // Initial state (off-screen, invisible)
      {
        x: 0, // End state (final position)
        opacity: 1, // Ensure full visibility at the end
        duration: 1.5, // Duration of the animation
        ease: 'power2.out', // Smooth easing effect
      }
    );

    // Animate Hero Paragraph with a slide-in effect from below
    gsap.from('.hero-paragraph', {
      y: 30, // Slide in from 30px below
      duration: 1,
      delay: 0.2, // Small delay for staggered effect
      ease: 'power2.out',
    });

    // Animate Button with a slide-in effect from below
    gsap.from('.hero-button', {
      y: 20, // Slide in from 20px below
      duration: 1,
      delay: 0.4, // Small delay for staggered effect
      ease: 'power2.out',
    });

    // Animate Image with a wobble effect (up and down)
    gsap.fromTo(
      '.hero-image',
      { y: 0 }, // Initial position
      {
        y: 10, // Move 10px up
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Make the animation go back and forth (wobble)
        duration: 1, // Duration of each wobble cycle
        ease: 'power1.inOut', // Ease effect for smooth bouncing
      }
    );
  }, []);

  return (
    <div
      className="flex flex-col px-14 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full relative bg-cover bg-center"
    >
      <div className="ml-4 max-md:max-w-full relative">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full hero-title">
            {/* Animated title */}
            <Animatedtitle title="GET TO KNOW US" containerClass="mt-4 text-xs text-white" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max:left-0 max-md:mt-[500px] max-md:w-[289px] max-md:h-[251px] md:ml-[-200px]">
            {/* Image for small screens */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/d6a4942175374e7baf2a6d7a60f38356/bb906981bfe80719648ae9e48bf8c22343f37f937db620942f9f73f59272de3e?apiKey=d6a4942175374e7baf2a6d7a60f38356&"
              alt="Get to know us illustration"
              className="object-contain grow w-[289px] h-[251px] max-md:mt-10 max-md:ml-[auto] max-md:mr-0 max-md:absolute max-md:right-0 max-md:pt-5 max-md:w-[240px] max-md:h-[200px] hero-image"
            />
          </div>
        </div>
      </div>

      {/* Wrapper for text and button */}
      <div className="flex flex-col lg:flex-col lg:gap-10 lg:items-start mt-9 text-xl font-light w-full max-md:w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4 max-md:absolute max-md:bottom-[350px] max:left-0 max-md:text-right text-white">
        <div className="hero-paragraph">
          "NextStep is a thoughtfully crafted platform designed to empower students in taking their next big leap toward a successful professional journey while helping companies discover top talent effortlessly."
        </div>

        {/* Button with larger padding for laptop and monitor */}
        <div className="mt-10 hero-button lg:pt-16 xl:pt-24">
          <Button />
        </div>
      </div>
    </div>
  );
}
