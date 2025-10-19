"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMafiaRoles } from "@/app/data/mafiaCards";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCarousel from "./components/testimonials";
import InstagramFeed from "./components/instagramfeed";
import Standings from "./components/standings";



export default function Home() {
  const [scenario, setScenario] = useState<string | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [players, setPlayers] = useState([]);
  const router = useRouter();
const mockPlayers = Array.from({ length: 15 }, (_, i) => ({
  name: `Player ${i + 1}`,
  image: `/images/avatar${(i % 5) + 1}.jpg`, // rotate 5 mock images
  rating: +(Math.random() * 5).toFixed(1),
  votes: Math.floor(Math.random() * 100),
}));
  const handleScenarioSelection = (selectedScenario: string) => {
    setScenario(selectedScenario);
  };

  const handlePlayerCountSelection = (num: number) => {
    if (!scenario) return;
    setNumPlayers(num);
    const roles = createMafiaRoles(num, scenario);
    setPlayers(roles as never[]);
    router.push(
      `/in-game?players=${encodeURIComponent(JSON.stringify(roles))}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
        {/* Soft floating clouds (blur effect) */}
        {/* Soft floating clouds (blur effect) */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Top left white blur */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 md:w-80 md:h-80"></div>

          {/* Middle right gray blur */}
          <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-gray-100 rounded-full blur-3xl opacity-70 md:w-72 md:h-72"></div>

          {/* Bottom orange blur — hidden or smaller on mobile */}
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#f5a142] rounded-full blur-3xl opacity-20 md:w-96 md:h-96 md:opacity-25"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          بازی کن با <span className="text-[#f7941f]">اعتماد</span>
          <br /> برنده شو با <span className="text-[#f7941f]">هوش</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10"
        >
          وارد دنیای مافیا شو، دوستانت رو دعوت کن و ثابت کن که باهوش‌ترین بازیکن
          جمعی!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            className="px-10 py-5 text-lg font-semibold bg-[#f7941f] text-white rounded-full shadow-lg hover:bg-[#e2831d] transition-all"
          >
            🎮 شروع بازی
          </Button>
        </motion.div>

        {/* Small labels / categories under button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12 text-gray-500 text-sm md:text-base"
        >
          {["مافیا کلاسیک", "بازپرس", "ونگارد", "نماینده"].map((label) => (
            <span
              key={label}
              className="px-5 py-2 bg-white shadow-sm rounded-full border border-gray-200 hover:border-[#f7941f] transition"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </section>

      {/* SCENARIO SECTION */}
      {/* SCENARIO SECTION */}
      <section id="scenarios" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          سناریوی خود را انتخاب کنید
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Bazpors",
              title: "🕵🏻‍♂️ بازپرس",
              desc: "یک بازی پر رمز و راز با تمرکز بر تحقیقات و کشف هویت.",
            },
            {
              name: "vanguard",
              title: "💂🏻 ونگارد",
              desc: "در این سناریو، تیم ونگارد در مقابل مافیا ایستاده است.",
            },
            {
              name: "Namayande",
              title: "🙋🏻‍♂️ نماینده",
              desc: "با نقش‌های جدید و هدف‌های متفاوت، بازی متفاوتی را تجربه کنید.",
            },
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                onClick={() => handleScenarioSelection(item.name)}
                className={`cursor-pointer border-2 ${
                  scenario === item.name
                    ? "border-[#f7941f] shadow-lg"
                    : "border-gray-200 hover:border-[#f5a142]"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  {item.desc}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Popup for Player Count Selection */}
        <AnimatePresence>
          {scenario && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setScenario(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                  onClick={() => setScenario(null)}
                >
                  ×
                </button>

                <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                  تعداد بازیکنان را انتخاب کنید
                </h4>

                <div className="flex justify-center flex-wrap gap-4 mb-8">
                  {[10, 12, 13].map((num) => (
                    <Button
                      key={num}
                      onClick={() => handlePlayerCountSelection(num)}
                      className="px-6 py-3 text-lg font-medium bg-[#f7941f] hover:bg-[#d97706] text-white"
                    >
                      {num} بازیکن
                    </Button>
                  ))}
                </div>

                <p className="text-gray-500 text-sm">
                  سناریوی انتخاب شده:{" "}
                  <span className="text-[#f7941f] font-semibold">
                    {scenario === "Bazpors"
                      ? "بازپرس"
                      : scenario === "vanguard"
                      ? "ونگارد"
                      : "نماینده"}
                  </span>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <TestimonialCarousel />

      {/* WEEKLY TOURNAMENT SECTION */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Left gradient background */}
        <div className="absolute left-0 top-0 w-1/2 h-full to-transparent rounded-r-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - cards */}
          <div className="space-y-6">
            {[
              {
                id: 1,
                title: "هفته‌ای پر از رقابت",
                desc: "هر هفته با بازیکنان برتر در رقابت‌های هیجان‌انگیز مافیا شرکت کنید.",
              },
              {
                id: 2,
                title: "جوایز ارزشمند",
                desc: "بهترین بازیکنان جوایز ویژه نقدی و امتیازی دریافت می‌کنند.",
              },
              {
                id: 3,
                title: "سیستم امتیاز و رتبه‌بندی",
                desc: "با هر بازی امتیاز بگیرید و در جدول رده‌بندی بالا بروید.",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white shadow-lg rounded-2xl p-6 border border-[#f7941f] hover:shadow-xl transition"
              >
                <span className="absolute -top-4 -left-4 bg-[#f7941f] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-md">
                  {item.id}
                </span>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right side - text + stats */}
          <div className="text-right">
            <h5 className="text-[#f7941f] font-semibold uppercase tracking-widest mb-3">
              درباره تورنمنت
            </h5>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              بهترین بازیکن شو و <br /> جوایز هفتگی مافیا را ببر!
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              در هر هفته، ما تورنمنت‌های ویژه برگزار می‌کنیم تا بازیکنان با
              مهارت‌های خود بدرخشند. با شرکت در مسابقات، امتیاز جمع کنید و در
              رتبه‌بندی بالا بروید تا جایزه بزرگ را ببرید.
            </p>

            <div className="grid grid-cols-3 text-center md:text-right gap-4">
              <div>
                <h4 className="text-3xl font-bold text-gray-900">12+</h4>
                <p className="text-gray-500">تورنمنت برگزارشده</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900">250+</h4>
                <p className="text-gray-500">شرکت‌کننده فعال</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900">10M+</h4>
                <p className="text-gray-500">کل جوایز اهدا شده</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />
      <Standings weekly={mockPlayers} monthly={mockPlayers} yearly={mockPlayers} />

      {/* NEWSLETTER SECTION */}
      <section
        id="newsletter"
        className="bg-[#f7941f] py-16 px-6 text-white text-center mt-10"
      >
        <h3 className="text-3xl font-bold mb-4">📬 عضویت در خبرنامه</h3>
        <p className="text-lg mb-8">
          جدیدترین سناریوها، نقش‌ها و ویژگی‌های بازی را زودتر از بقیه دریافت
          کنید.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-grow p-4 rounded-lg"
            />
            <Button className="bg-white text-[#f7941f] hover:bg-gray-100">
              عضویت
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
}
