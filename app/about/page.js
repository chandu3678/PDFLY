import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-around p-6 md:p-12 bg-[#fffef2]">
      {/* Text container */}
      <div className="max-w-xl mx-auto md:mx-0 p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          PDFLY is a lightweight PDF merging web app built using Next.js,
          Tailwind CSS, and the pdf-merger-js library. This project was
          developed as part of my learning journey into full-stack web
          development and to showcase my skills in my portfolio.
          <br />
          <br />
          Feel free to try it out or explore the source code if you're curious!
        </p>
      </div>

      {/* Image container */}
      <div className="relative w-60 h-52 sm:w-72 sm:h-60 md:w-[28rem] md:h-[20rem] lg:w-[36rem] lg:h-[26rem] mt-8 md:mt-0">
        <Image
          src="/images/vector2.png"
          alt="Illustration"
          fill
          className="object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
