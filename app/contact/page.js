import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-screen min-h-screen flex flex-col items-center justify-center bg-[#FFFFF0] px-4 py-8">
      {/* ✅ Image on top */}
      <div className="mb-8">
        <Image
          src="/images/gmailicon.png"
          alt="Gmail Logo"
          height={200}
          width={200}
          className="mx-auto"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>

      <p className="text-lg mb-6 text-center max-w-md">
        Have questions or want to collaborate? Feel free to reach out via email!
      </p>

      <a
        href="mailto:chandrashekar.yakala@gmail.com"
        className="bg-amber-400 text-white px-6 py-3 rounded-lg text-lg hover:bg-amber-500 transition"
      >
        Send Email
      </a>
    </div>
  );
};

export default Contact;
