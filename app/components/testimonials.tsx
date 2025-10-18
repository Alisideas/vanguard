"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "سپهر فرزاد",
    role: "عضو خانواده دونیتو",
    text: "تجربه‌ای تکرارنشدنی! اتحاد، قدرت و رازهای پنهان، این بازی رو خاص کرده.",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "محمد زاهدی",
    role: "عضو خانواده دونیتو",
    text: "هر مرحله مثل یک نبرد واقعی بین مافیاهاست. طراحی محیط بی‌نظیر و پر از جزئیاته.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "پدرام صادقی",
    role: "عضو خانواده دونیتو",
    text: "فضای سبز تیره، موسیقی و داستان بازی حس واقعی زندگی در سایه‌ها رو می‌ده.",
    avatar: "/images/avatar3.jpg",
  },
  {
    name: "ایمان ابراهیمی",
    role: "عضو خانواده دونیتو",
    text: "سیستم اتحادها و قلمروها فوق‌العاده‌ست، رقابت واقعی بین بازیکنان ایجاد می‌کنه.",
    avatar: "/images/avatar4.jpg",
  },
  {
    name: "شایان غلامرضایی",
    role: "عضو خانواده دونیتو",
    text: "بهترین بازی برای عاشقان رمز، قدرت و رقابت! تیم سازنده واقعاً حرفه‌ایه.",
    avatar: "/images/avatar5.jpg",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-[#0a1a0a] text-gray-200 py-20 overflow-hidden">
      <div className="text-center mb-12">
        <div className="inline-block bg-[#0f2f0f] text-green-400 text-sm px-4 py-1 rounded-full border border-green-700 shadow-md">
          ⭐️ امتیاز ۴٫۸ از ۵ توسط بیش از ۵۰۰۰ بازیکن
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 text-green-300">
          صداهایی از دنیای زیرزمینی ونگارد
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          بازیکنان درباره تجربه خود در دنیای مافیا چه می‌گویند؟
        </p>
      </div>

      {/* ✅ FIXED & COMPACT SCROLLING CONTAINER */}
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar px-4 md:px-10">
        <div
          className="
            flex 
            gap-5 
            w-max 
            scroll-smooth 
            snap-x 
            snap-mandatory
            pb-4
          "
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="
                flex-shrink-0 
                snap-center 
                w-[250px] sm:w-[280px] md:w-[300px]
                bg-gradient-to-br 
                from-[#102010] to-[#1a2d1a] 
                border border-green-700/40 
                rounded-2xl p-5 
                shadow-lg shadow-green-900/40 
                flex flex-col justify-between
              "
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="text-gray-300 italic leading-relaxed mb-5 text-sm md:text-base">
                “{t.text}”
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={42}
                  height={42}
                  className="rounded-full border border-green-600"
                />
                <div>
                  <h4 className="font-semibold text-green-300 text-sm md:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
