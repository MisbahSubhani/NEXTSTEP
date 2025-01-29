import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
export function NavbarMain() {
  return (
    <div >
    <Navbar fluid rounded-semi  className="bg-zinc-100">
      <NavbarBrand as={Link} href="/">
        <img src="https://img.freepik.com/premium-vector/businessman-logo-with-bag-concept_11481-280.jpg?w=740" className="mr-4 h-20 sm:h-20" alt="Find Job" />
    <h2 className="font-extrabold  italic  text-2xl  font-serif  ">Next-Step</h2>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
      <Link className="mt-3 " to="/About">About Us</Link>
      <Link className="mt-3 "  to="/Contact">Contact</Link>
     
        <Button  href=" /signup" color="dark" pill>
        SignUp
      </Button>
     
        
      </NavbarCollapse>
    </Navbar>
   
      </div>
  );
}
