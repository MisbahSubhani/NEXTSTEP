import React from "react";
import { Header } from "../Components/Header";
import { HeroSection } from "../Components/HeroSection";
import { StorySection } from "../Components/StorySection";
import { MessageSection } from "../Components/MessageSection";
import { FooterSection } from "../Components/FooterSection";
// import { NavbarMain } from "../Components/NavbarMain";


export function About() {
  return (
    <div className="flex overflow-hidden flex-col  bg-slate-900 
    " style={{
      backgroundImage: "url('/img/hero-2.png')", // Use the relative path
      backgroundSize: "cover", // Ensure background covers entire div
      backgroundPosition: "center", // Center the background image
      paddingTop: 0, // Ensure no padding on top
      marginTop: 0, // Ensure no margin on top
    }}>
      <Header />
      {/* <NavbarMain/> */}
      <HeroSection />
      <StorySection />
      <MessageSection />
      <FooterSection/>
    </div>
  );
}


