"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script dynamically
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gray-50 text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        دنبال کنید در اینستاگرام
      </h2>
      <p className="text-gray-500 mb-10">
        جدیدترین پست‌های ما را در اینستاگرام مشاهده کنید
      </p>

      {/* Carousel container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scrollable posts */}
        <div
          ref={scrollRef}
          className="
            flex overflow-x-auto no-scrollbar gap-6 px-6
            scroll-smooth snap-x snap-mandatory
          "
        >
          {[
            "https://www.instagram.com/p/DPrnYSigF8C/",
            "https://www.instagram.com/p/DPU0ilJiAr-/",
            "https://www.instagram.com/p/DG_SZfjIEEW/",
            "https://www.instagram.com/p/DI7FNrIgmH6/",
            "https://www.instagram.com/p/DJ5BG9SNtxe/",
          ].map((url, i) => (
            <blockquote
              key={i}
              className="instagram-media flex-shrink-0 w-[90%] sm:w-[340px] mx-auto snap-center"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                maxWidth: "340px",
                minWidth: "320px",
              }}
            ></blockquote>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Instagram Button */}
      <div className="mt-10">
        <a
          href="https://www.instagram.com/vanguard__club/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f7941f] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d97706] transition"
        >
          مشاهده صفحه اینستاگرام
        </a>
      </div>
    </section>
  );
}
