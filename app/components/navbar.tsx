"use client";
import Image from "next/image";
import Link from "next/link";
import { IoQrCode } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className=" flex justify-between items-center h-full">
        <div>
          <div
            className="text-gray-600 hover:text-gray-800 cursor-pointer ml-4"
            onClick={() =>
              window.open(
                "https://karekodrestaurantmenu.com/menu/20671",
                "_blank"
              )
            }
          >
            <IoQrCode width={100} height={100} className="w-10 h-10" />
          </div>
        </div>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <div>
          <div
            className="text-gray-600 hover:text-gray-800 cursor-pointer mr-4"
            onClick={() =>
              window.open("https://maps.app.goo.gl/bzLbR7Yt9RZZpyvj7", "_blank")
            }
          >
            <GrLocationPin width={100} height={100} className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
