import Image from "next/image";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";


function Contact() {
    return (
        <main className="bg-black pt-10 pb-10">
            <div className="container mx-auto my-10 px-4 md:px-0 md:w-2/3 lg:w-1/2">
            <div className="p-6 space-y-8 shadow-xl  bg-stone-900 rounded-lg">
                <h4 className="text-center font-bold text-3xl md:text-5xl text-white ">
                        Contact<span className="text-[#ED2279] "> Me</span> 
                    </h4>

                    <form>
                     <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                            
                            <input
                                type="text"
                                className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-[#ED2279"
                                placeholder="First Name"/>

                        
                            <input
                                type="text"
                                className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-[#ED2279]"
                                placeholder="Last Name"/>

                            
                            <input
                                type="email"
                                className="bg-black text-white px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-[#ED2279]"
                                placeholder="Email"/>

                        
                            <input
                                type="tel"
                                className="bg-black text-white px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-[#ED2279]"
                                placeholder="Phone"/>

                        
                            <textarea
                                cols= {10}
                                rows= {5}
                                className="bg-black text-white px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-[#ED2279]"
                                placeholder="Write Your Message"></textarea>

                            
                            <input
                                type="submit"
                                value="Send Message"
                                className="bg-[#ED2279]  text-black font-bold py-2 px-4 rounded col-span-1 md:col-span-2 hover:bg-[#ED2279] cursor-pointer transition"/>
                        </div>
                    </form>
                    <div className="text-center pt-5 text-white">

                    <div className="flex gap-3  ml-44  md:text-right text-2xl ">
                     <SiFacebook className="border-2 border-[#ED2279] rounded-full " />
                     <FaInstagram className="border-2 border-[#ED2279] rounded-full"/>
                     <RiLinkedinFill className="border-2 border-[#ED2279] rounded-full"/>
                     <IoIosCall className="border-2 border-[#ED2279] rounded-full"/>
                     </div>


                        <h1>&copy; 2024 || All Rights Reserved...</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;






























































































                     
