"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img6 from "@/images/banner/background-1.png";
import img2 from "@/images/banner/giai-phap.png";
import img4 from "@/images/banner/ke-hop-tac.png";

const slides = [
  {
    image: img2,
    title: "HILO-CA: Giải pháp chữ ký số an toàn, nhanh chóng",
    desc: "HILO-CA mang đến giải pháp ký số tiện lợi, bảo mật, đáp ứng mọi nhu cầu giao dịch điện tử với tính pháp lý cao.",
    button: "XEM THÊM",
  },
  {
    image: img4,
    title: "Ký kết hợp tác phát triển giải pháp số hóa",
    desc: "HILO ký kết hợp tác với nhiều doanh nghiệp lớn, thúc đẩy chuyển đổi số, quản lý hồ sơ lưu trữ hiệu quả.",
    button: "XEM THÊM",
  },
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden py-12 min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#c3e5ff] to-[#e5f3ff]">
      <Image
        src={img6}
        alt="background"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-blue-100/10 backdrop-blur-sm z-0" />
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="banner-slider-offer-button absolute top-1/2 left-4 right-4 z-30 flex justify-between -translate-y-1/2">
          <button
            className="slick-btn-prev bg-white/80 hover:bg-white p-2 rounded-full shadow border border-gray-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
          <button
            className="slick-btn-next bg-white/80 hover:bg-white p-2 rounded-full shadow border border-gray-300"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[320px] md:h-[400px] relative rounded-xl overflow-hidden border-4 border-white shadow-xl"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={"text-" + index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200 slick-item__content"
          >
            <div className="slick-item__content-container flex flex-col justify-between h-full">
              <div className="slick-item__content-top">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                  {slides[index].title}
                </h2>
                <p className="text-gray-700 mb-6 text-sm md:text-base">
                  {slides[index].desc}
                </p>
              </div>
              <div>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded transition">
                  {slides[index].button}
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-orange-400" : "w-6 bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;
