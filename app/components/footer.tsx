"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="text-gray-300 mt-20 border-t border-orange-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
        {/* لوگو / برند */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="لوگوی ونگارد مافیا"
              width={150}
              height={150}
              className="w-32 sm:w-40"
            />
          </Link>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ونگارد و کافی مافی
          </p>
        </div>

        {/* درباره شبکه */}
        <div>
          <h4 className="font-semibold text-[#f7941f] mb-4 uppercase text-sm tracking-wider">
            شبکه
          </h4>
          <ul className="space-y-2 text-gray-400 hover:[&_li]:text-gray-200 transition-all">
            <li>خانه</li>
            <li>درباره ما</li>
            <li>داستان</li>
            <li>اتحادها</li>
          </ul>
        </div>

        {/* گیم‌پلی */}
        <div>
          <h4 className="font-semibold text-[#f7941f] mb-4 uppercase text-sm tracking-wider">
            گیم‌پلی
          </h4>
          <ul className="space-y-2 text-gray-400 hover:[&_li]:text-gray-200 transition-all">
            <li>رتبه‌ها و قدرت</li>
            <li>بازار سیاه</li>
            <li>قلمروها</li>
            <li>قراردادها</li>
          </ul>
        </div>

        {/* تماس و قوانین */}
        <div>
          <h4 className="font-semibold text-[#f7941f] mb-4 uppercase text-sm tracking-wider">
            تماس با ما
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>support@vanguardmafia.com</li>
            <li>(+1) 555-933-4040</li>
          </ul>

          <h4 className="font-semibold text-[#f7941f] mt-6 mb-4 uppercase text-sm tracking-wider">
            قوانین
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>شرایط استفاده</li>
            <li>سیاست حفظ حریم خصوصی</li>
          </ul>
        </div>

        {/* عضویت و نقشه استانبول */}
        <div className="rounded-2xl md:w-[300px] sm:w-[400px] md:w-[500px] overflow-hidden border border-orange-900/50 p-6 flex flex-col justify-between shadow-lg shadow-orange-900/30">
          <div>
            <p className="text-xs uppercase text-[#f7941f] mb-2">
              به شبکه ونگارد بپیوندید
            </p>
            <h3 className="text-lg font-semibold text-gray-700 leading-snug">
              از مأموریت‌ها و به‌روزرسانی‌های <br /> دنیای زیرزمینی استانبول باخبر شوید.
            </h3>

            <div className="flex justify-between items-center mt-4 bg-orange-900/30 border border-orange-900/40 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="ایمیل محرمانه خود را وارد کنید"
                className="flex-grow px-3 text-sm py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none text-right"
              />
              <button className="bg-[#f7941f] text-black font-semibold px-4 py-2 hover:bg-orange-500 transition">
                عضویت
              </button>
            </div>
          </div>

          {/* نقشه استانبول */}
          <div className="mt-4 rounded-xl overflow-hidden border border-orange-800/40">
            <iframe
              title="نقشه استانبول"
              width="100%"
              height="180"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.898277852677!2d28.653150790762933!3d41.00559959748158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f0009adb50b%3A0xb76e4f50b7e79c46!2sCafi%20mafi!5e0!3m2!1sen!2str!4v1760797311608!5m2!1sen!2str"
              style={{
                filter:
                  "grayscale(100%) contrast(120%) brightness(90%) hue-rotate(320deg)",
              }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center py-6 text-xs text-gray-500 border-t border-orange-900/30">
        <span className="text-[#f7941f]">
          🧡 ساخته شده بدست هکر — استانبول، ۲۰۲۵
        </span>
      </div>
    </footer>
  );
}
