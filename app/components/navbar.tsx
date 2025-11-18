"use client";

import Image from "next/image";
import Link from "next/link";
import { IoQrCode } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import Skeleton from "./skeleton";

const Navbar = () => {
  const { data: session, status } = useSession();

  const userRole = session?.user?.role;
  const isLoading = status === "loading";

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

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {isLoading ? (
            <span className="text-gray-500 text-sm">
              <Skeleton />
            </span>
          ) : session ? (
            <>
              <div className="flex items-center gap-4">
                {/* Dashboard link based on role */}
                {userRole === "ADMIN" ? (
                  <>
                    <Link
                      href="/dashboard/admin"
                      className="text-sm text-gray-700 hover:text-gray-900"
                    >
                      داشبورد ادمین
                    </Link>
                    <div>
                      <Button onClick={() => (window.location.href = "/dashboard/admin/newgame")}>بازی جدید</Button>
                    </div>
                  </>
                ) : (
                  <Link
                    href="/dashboard/user"
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    داشبورد من
                  </Link>
                )}

                {/* Logout Button */}
                <Button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  خروج
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  href="/login"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  ورود
                </Link>
              </div>
              <div className="border-l border-gray-300 pl-4">
                <Button
                  className="bg-[#f7941f] hover:bg-gray-700 text-white"
                  onClick={() => (window.location.href = "/register")}
                >
                  ثبت‌نام
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
