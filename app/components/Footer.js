import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#FFFFF0] mt-10 p-6 rounded-t-lg text-center text-sm text-gray-700 ">
        <p className="font-semibold">PDFLY</p>
        <p className="text-xs mt-1">
          Merge your PDFs in seconds — fast, simple & free.
        </p>
        <p className="mt-3">
          &copy; {new Date().getFullYear()} PDFLY. Built with ❤️ for You by Chandrashekhar.
        </p>
      </footer>
    </div>
  );
}

export default Footer