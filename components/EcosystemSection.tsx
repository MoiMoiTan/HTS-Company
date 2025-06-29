"use client";

import Image from "next/image";
import Link from "next/link";
import { items } from "@/constants/index";

export default function EcosystemSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
          Hệ sinh thái HTS
        </h2>
        <p className="mb-10 text-gray-700 max-w-3xl text-base">
          HTS luôn khẳng định vị thế tiên phong trong các lĩnh vực Công nghệ,
          Viễn thông và Giáo dục. Đón đầu xu hướng công nghệ, thị trường, HTS
          tạo dựng Hệ sinh thái những dịch vụ, sản phẩm, giải pháp, nền tảng
          Made by HTS thúc đẩy sự phát triển, tăng trưởng bền vững của các tổ
          chức, doanh nghiệp cũng như mang đến những trải nghiệm mới, khác biệt
          cho người dùng.
        </p>
        <div className="grid grid-cols-1 gap-10">
          {/* Hàng 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Đã xóa biến 'i' không sử dụng */}
            {items.slice(0, 2).map((item) => (
              <div
                key={item.title}
                className="flex bg-white rounded-3xl shadow p-6 md:p-8 items-center gap-8"
              >
                <div className="flex-shrink-0 w-2/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-3xl object-cover w-full h-56 md:h-64"
                    width={400}
                    height={240}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-base md:text-lg">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-block bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-orange-600 transition text-sm md:text-base self-start"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    XEM THÊM
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Hàng 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Đã xóa biến 'i' không sử dụng */}
            {items.slice(2, 4).map((item) => (
              <div
                key={item.title}
                className="flex bg-white rounded-3xl shadow p-6 md:p-8 items-center gap-8"
              >
                <div className="flex-shrink-0 w-2/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-3xl object-cover w-full h-56 md:h-64"
                    width={400}
                    height={240}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-base md:text-lg">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-block bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-orange-600 transition text-sm md:text-base self-start"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    XEM THÊM
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
