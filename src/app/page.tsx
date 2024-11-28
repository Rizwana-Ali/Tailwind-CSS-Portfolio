"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
    return (

      <main className="bg-black text-white min-h-screen flex flex-col items-center">
        
        <div className="w-full max-w-screen-lg px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between pt-5">

          <div className="mt-12 md:mt-0 border-2 border-[#ED2279]">
              <Image
                src={"/jp copy.jpg"}
                width={400}
                height={600}
                alt="portfolio"
                className="rounded-lg mx-auto md:mx-0"
              />
            </div>
            
            <div className="text-center mt-20 md:text-left">
              <p>Hello</p>
              <h1 className="text-2xl font-bold">I am</h1>
              <span className="text-[#ED2279]  text-3xl font-bold">Rizwana Ali</span>
              <h2 className="  font-bold pt-3">
                
                <span>
                  I&apos;m {" "}
                </span>
              <span className="text-[#ED2279]  ">  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Web Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'UI/UX Designer',
        1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></span>
              </h2>
              

                     <p>  I&apos;m  a passionate frontend developer dedicated <br/>to crafting exceptional digital experiences.
                    With a keen eye for <br/> design and aknack for problem-solving, I bring innovative ideas<br/> to live through clean, 
                   efficient, and user-friedly interfaces.</p>

                  

                     <div>
                 <button className="  text-black  mt-8 mb-24 pr-5 pl-5  bg-[#ED2279] rounded-2xl"> Download CV</button>
                 </div>
  
              
               
             
                
              
            </div>
  
            
            
          </div>
        </div>
      </main>
    );
  }
  























































































