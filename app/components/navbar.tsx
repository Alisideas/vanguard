"use client";
import Image from "next/image";
import Link from "next/link";
import { IoQrCode } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* LEFT: QR ICON */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-[#f7941f] hover:text-gray-700 cursor-pointer"
          onClick={() =>
            window.open(
              "https://karekodrestaurantmenu.com/menu/20671",
              "_blank"
            )
          }
        >
          <IoQrCode className="w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>

        {/* CENTER: LOGO */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Vanguard Mafia Logo"
            width={150}
            height={150}
            className="w-32 sm:w-40"
          />
        </Link>

        {/* RIGHT: sign in / sign up */}
        <div className="flex items-center gap-4">
          <div>
            <Link
              href="/sign-in"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ورود
            </Link>
          </div>
          <div className="border-l border-gray-300 pl-4">
            <Button
            className="bg-[#f7941f] hover:bg-gray-700 text-white"
              onClick={() =>
                window.location.href = "/sign-up"
              }
            >
              ثبت‌نام
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
