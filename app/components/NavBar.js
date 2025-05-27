"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 text-black bg-[#FFFFF0] flex justify-between items-center shadow-md px-6 relative z-50">
      {/* Logo */}
      <div className="logo text-3xl font-bold">
        <span className="text-amber-300">PDF</span>LY
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex text-lg gap-6 font-medium">
        <li className="hover:bg-gray-300 px-3 py-2 rounded-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-300 px-3 py-2 rounded-lg">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:bg-gray-300 px-3 py-2 rounded-lg cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:bg-gray-300 px-3 py-2 rounded-lg cursor-pointer">
          <Link href="/github">Git Hub</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close icon inside */}
        <div className="flex justify-end p-4">
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden z-50"
            >
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* Mobile Nav */}
        <ul className="flex flex-col mt-4 px-6 gap-6 text-lg font-medium">
          <li className="hover:bg-gray-200 px-3 py-2 rounded-md">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:bg-gray-200 px-3 py-2 rounded-md">
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:bg-gray-200 px-3 py-2 rounded-md">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="hover:bg-gray-200 px-3 py-2 rounded-md">
            <Link href="/github" onClick={() => setMenuOpen(false)}>
              Git Hub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
