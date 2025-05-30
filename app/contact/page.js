import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFF0] px-4 py-8">
      {/* Responsive flex layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
        {/* Gmail Section */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg w-full max-w-xs min-h-[400px]">
          <div className="h-[150px] flex items-center justify-center mb-4">
            <Image
              src="/images/gmailicon.png"
              alt="Gmail Logo"
              height={100}
              width={100}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-md mb-4">
            Have questions or want to collaborate? Feel free to reach out via
            email!
          </p>
          <a
            href="mailto:chandrashekar.yakala@gmail.com"
            className="mt-auto bg-amber-400 text-white px-6 py-2 rounded-lg hover:bg-amber-500 transition"
          >
            Send Email
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg w-full max-w-xs min-h-[400px]">
          <div className="h-[150px] flex items-center justify-center mb-4">
            <Image
              src="/images/linkedinimage.png"
              alt="LinkedIn Logo"
              height={150}
              width={150}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Connect with Me</h2>
          <p className="text-md mb-4">Want to check out my LinkedIn profile?</p>
          <a
            href="https://www.linkedin.com/in/chandrashekhar-yakala-566088322"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-amber-400 text-white px-6 py-2 rounded-lg hover:bg-amber-500 transition"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
