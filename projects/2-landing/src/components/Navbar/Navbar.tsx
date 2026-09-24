import { useState, type ReactNode } from "react"

import {AnimatePresence, motion} from "framer-motion"
import { Code2, Menu, X } from "lucide-react";
import type React from "react";
import Button from "../ui/Button";

const navLinks:{ name: string;
    href: string;}[] = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Courses", href: "#courses" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];


 const Navbar = ():ReactNode => {

  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);


  const handleNavClick=(e:React.MouseEvent<HTMLAnchorElement>,href:string)=>{
  e.preventDefault();
  setIsMobileMenuOpen(false);

  const el=document.querySelector(href);
  if(el){
    el.scrollIntoView({behavior:"smooth"})
  }
  };



  return (
<>
{/* nav */}
   <motion.nav
   initial={{y:-100}} 
   animate={{y:0}}
   transition={{duration:0.5}}
   className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
   >
    {/* container */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* parent with-height */}
      <div className="flex items-center justify-between h-16 md:h-20 ">

        {/* logo */}
        <a href="#home" className="flex items-center gap-5.5 group" onClick={(e)=>handleNavClick(e,"#home")}>
          <div className="bg-linear-to-br from-primary to-accent-blue relative w-9 h-9 flex items-center justify-center rounded-lg group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
            <Code2 className="text-lg w-5 h-5 text-white"/>
          </div>
          <span className="text-lg font-bold text-text-primary">Code<span className="text-primary-light">Master</span></span>
        </a>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link)=>(
            <a className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-surface-light/30" key={link.name} href={link.href} onClick={(e)=>handleNavClick(e,link.href)}>{link.name}</a>
          ))}
        </div>
     
     {/* dekstop  CTA */}
       {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 ">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>


      </div>
    </div>
   </motion.nav>

   {/* mobile-menu */}
   <AnimatePresence>

   {isMobileMenuOpen&&(
    
     <motion.div
    initial={{opacity:0,y:-10}} 
   animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-10}} 
   transition={{duration:0.2}}
   className="fixed inset-0 z-40 md:hidden"
     >
      <div
      className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
      onClick={()=>setIsMobileMenuOpen(false)}
      >
        <motion.div
            initial={{opacity:0,y:-20}} 
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-20}} 
            className="absolute top-16 left-4 right-4 glass rounded-2xl shadow-2xl p-6"
        >
          <div className="flex flex-col gap-1">
              {navLinks.map((link)=>(
            <a className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-lg hover:bg-surface-light/30" key={link.name} href={link.href} onClick={(e)=>handleNavClick(e,link.href)}>{link.name}</a>
          ))}
          </div>
          <div className="flex flex-col mt-4 pt-4 bord-t border-surface-border gap-2">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
   )}
   </AnimatePresence>
</>
  );
}

export default Navbar;
