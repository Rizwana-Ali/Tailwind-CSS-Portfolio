
import Image from "next/image";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu, MenuIcon } from "lucide-react";

export default function Header() {
  return (
  
    
<main className="bg-black text-white">

    {/* <!-- Navbar --> */}
    <nav className="bg-black flex  space-x-6 pt-4 md:flex justify-center items-center ">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold pt-4 pl-10" >MyPort<span className="text-[#ED2279]">folio</span></h1>
            <ul className="hidden md:block">
               
               <li className="space-x-5 mr-44">
                
              <Link className="hover:text-[#ED2279] hover:underline" href="/">Home</Link>  

               <Link className="hover:text-[#ED2279] hover:underline" href="/about">About</Link>

                <Link className="hover:text-[#ED2279] hover:underline" href="/skills">Skills</Link>

                 <Link className="hover:text-[#ED2279] hover:underline" href="/projects">Projects</Link>

                  <Link className="hover:text-[#ED2279] hover:underline" href="/contact">Contact</Link>

                
                <button className="text-black  bg-[#ED2279] rounded-3xl px-3 ml-20 "> <Link href="/contact">Contact me</Link></button></li>
                

                 </ul> 
                  
                

        <Sheet>
  <SheetTrigger className="text-1xl  pr-24 md:hidden"><Menu /></SheetTrigger>
  <SheetContent  className="bg-white">
    <SheetHeader>
      <SheetTitle className="mr-60 ">Rizwana Ali</SheetTitle>
      <SheetDescription>
        
       <ul className="mr-60 space-y-10  font-2xl">

                <li><Link href="/" className="hover:text-[#ED2279]">Home</Link></li>
                <li><Link href="about" className="hover:text-[#ED2279]">About</Link></li>
                
                <li><Link href="skills" className="hover:text-[#ED2279]">Skills</Link></li>
                <li><Link href="projects" className="hover:text-[#ED2279]">Projects</Link></li>

                <li><Link href="contact" className="hover:text-[#ED2279]">Contact</Link></li> 

                 </ul>

                

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            
          
      </div>
        
    </nav>
    
    </main>

    )
    }
    Header




























































































