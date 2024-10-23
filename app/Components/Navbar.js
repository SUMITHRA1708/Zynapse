import React from 'react';
import Link from 'next/link'; 

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
      <div>
        <Link href="/">
          <p className="text-2xl font-semibold text-blue-600">Zynapse</p>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="#about">
          <p className="cursor-pointer hover:text-blue-600 transition">About</p>
        </Link>
        <Link href="#features">
          <p className="cursor-pointer hover:text-blue-600 transition">Features</p>
        </Link>
        <Link href="#cta">
          <p className="cursor-pointer hover:text-blue-600 transition">Join Us</p>
        </Link>
        <Link href="/Signup">
          <p className="bg-blue-600 cursor-pointer text-white rounded-lg px-5 py-2 hover:bg-blue-700 transition">Get Started</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
