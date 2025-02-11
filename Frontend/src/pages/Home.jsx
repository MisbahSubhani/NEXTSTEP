
import { Link } from "react-router-dom";

import { Button } from "flowbite-react";
// import { NavbarMain } from "../Components/NavbarMain";

import { Navbarnew } from "../Components/Navbarnew";
import { Header } from "../Components/Header";
import { SlideImage } from "../Components/SlideImage";
import { MidHome } from "../Components/MidHome";


export function Home() {
  return (
    <div   >
    {/* <NavbarMain/> */}
   <Navbarnew/>
    <SlideImage/>
    <MidHome/>
    </div>
  );
}
