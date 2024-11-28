

import Image from "next/image";
import Link from "next/link";

function Projects() {
    return (
      <main className="bg-black min-h-screen">
        {/* Header Section */}
        <div className="pt-10 pb-8 text-center">
          <h2 className="text-4xl text-white md:text-6xl font-bold">My <span className="text-[#ED2279]">Work</span></h2>
        </div>
  
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-32">
          

          {/* First project */}

          <div className="text-white bg-stone-900 rounded-lg p-6  transition duration-300">
            <h2 className="font-bold text-xl">Calculator</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/calculator image2.jpg"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <a href="https://calculator-with-html-css-and-javascript.vercel.app/"><button className=" hover:text-[#ED2279]">Click here</button></a>
            </div>
  
          

          {/* second project */}

          <div className="text-white bg-stone-900 rounded-lg p-6 transition duration-300">
            <h2 className="font-bold text-xl">CSS Portfolio</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/portcss.png"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          <a href="https://portfolio-in-css-psi.vercel.app/"><button className=" hover:text-[#ED2279]">Click here</button></a>
           </div>
  
          
          {/* Third project */}

          <div className="text-white bg-stone-900 rounded-lg p-6 transition duration-300">
            <h2 className="font-bold text-xl pt-5">Car Rental Website</h2>
            <div className="mt-12 md:mt-0">
            <Image
              src={"/carpurple.png"}
              width={400}
              height={600}
              alt="portfolio"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
                 <a href="https://car-rental-gamma-sandy.vercel.app/"><button className=" hover:text-[#ED2279]">Click here</button></a>

          </div>
  
         
        </div>
      </main>
    );
  }
  
  export default Projects
  










































































































































  