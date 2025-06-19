"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { newsData } from "@/constants/newData";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import bannerEvents from "@/images/banner/banner-events.png";

const NewsListPage = () => {
  return (
    <div className="bg-gray-50/70">
      <Image
        src={bannerEvents}
        alt="Tin tức và Sự kiện HTS Banner"
        className="object-cover object-center"
        priority
      />
      <Container>
        <div className="py-16 md:py-24">
          {/* <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Tin tức và Sự kiện
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về sản phẩm, kiến thức ngành và
              các hoạt động của HTS.
            </p>
          </div> */}

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((newsItem) => {
              const excerpt =
                newsItem.content.find((block) => block.type === "paragraph")
                  ?.text || "";

              return (
                <Link
                  key={newsItem.id}
                  href={`/tin-tuc?id=${newsItem.id}`}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={newsData.indexOf(newsItem) < 3}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-orange-700 bg-orange-100 text-xs font-semibold mb-3 px-3 py-1 rounded-full self-start">
                      {newsItem.category}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {newsItem.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {newsItem.date}
                      </span>
                      <span className="text-orange-500 font-semibold text-sm inline-flex items-center gap-1">
                        Đọc thêm
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsListPage;
