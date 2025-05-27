"use client";
import React from "react";
import Image from "next/image";

const Github = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around p-6 ">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">
          Want to see the code or contribute?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You can download the full project code or visit my GitHub page to
          explore more cool projects!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://github.com/your-username/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-white font-medium rounded-lg w-60 p-3 text-center hover:bg-amber-500 transition"
          >
            Download Source Code{" "}
            <span className="transform scale-x-[-1] inline-block">
              &#x21F1;
            </span>
          </a>
          <a
            href="https://github.com/chandu3678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-white font-medium rounded-lg w-44 p-3 text-center hover:bg-amber-500 transition"
          >
            Visit my GitHub{" "}
            <span className="transform scale-x-[-1] inline-block">
              &#x21F1;
            </span>
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <Image
          src="/images/GitHub logo.png"
          alt="GitHub Logo"
          width={300}
          height={300}
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Github;
