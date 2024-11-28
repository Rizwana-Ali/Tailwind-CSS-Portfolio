
import Image from "next/image";

function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row justify-around items-center">
      <div className="text-white  items-center md:items-start pt-10 md:pt-28 px-4 md:px-0">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-3xl md:text-4xl font-bold text-center md:text-left"
          >
            About <span className="text-[#ED2279]">Me</span>
          </h1>
          <h2 className="text-lg md:text-xl font-bold pt-3 text-center md:text-left">
            Web <span className="text-[#ED2279]">Developer!</span>
          </h2>
          <p className="pt-3 text-sm md:text-base text-center md:text-left">
            Results-driven web developer with a passion for
            <br /> innovative solutions. Skilled in HTML, CSS, JavaScript,
            <br /> Next.js, Tailwind CSS, TypeScript. Dedicated to delivering
            <br /> high-quality, user-centric websites.
          </p>
          
        </div>
        <div>
        <button className="  text-black  mt-8 mb-24 pr-5 pl-5  bg-[#ED2279] rounded-2xl">
            Read More
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-10">
        <Image
          className="border-2 border-[#ED2279] rounded-lg"
          src={"/pink copy.jpg"}
          width={350}
          height={500}
          alt="portfolio"
        />
      </div>
    </div>
  );
}

export default About;




































