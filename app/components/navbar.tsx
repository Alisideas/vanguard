"use client";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To control the menu state for mobile view

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className=" flex justify-center items-center h-full">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
