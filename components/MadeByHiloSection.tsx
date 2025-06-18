"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayCircle, XCircle } from "lucide-react";

// Đảm bảo bạn có file ảnh này trong thư mục '@/images/banner/'
import madeByHTSDiagram from "@/images/MadeByHTS.png";

export default function MadeByHTSSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Hình ảnh bên trái */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={madeByHTSDiagram}
            alt="Made by HTS Diagram"
            width={600}
            height={400}
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Made by HTS
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            Dựa trên những công nghệ mới nhất, hệ sinh thái Made by HTS giúp
            doanh nghiệp, tổ chức trong mọi lĩnh vực đẩy nhanh quá trình chuyển
            đổi số, gia tăng năng suất, tiết kiệm chi phí, tận dụng tối đa nguồn
            lực để vượt qua các thách thức.
          </p>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="inline-flex items-center bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-lg"
          >
            <PlayCircle className="h-5 w-5 mr-2" />
            XEM VIDEO
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-200 z-10"
            >
              <XCircle className="h-8 w-8" />
            </button>
            <div className="relative pt-[56.25%] w-full">
              {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/-G-YjZ53jc0?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Made by HTS Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
