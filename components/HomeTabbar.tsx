"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, Cpu, Users } from "lucide-react";

const visionItems = [
  {
    icon: <Briefcase className="h-10 w-10 text-orange-500" />,
    title: "Kinh doanh",
    description:
      "Chúng tôi đầu tư, nghiên cứu phát triển các dịch vụ, giải pháp chuyển đổi số toàn diện đáp ứng nhu cầu của khách hàng ở mọi quy mô, lĩnh vực.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-orange-500" />,
    title: "Công nghệ",
    description:
      "Chúng tôi luôn tiếp cận những xu hướng công nghệ mới nhất để phát triển các nền tảng, công nghệ lõi và gia tăng trải nghiệm khách hàng, hiệu quả vận hành.",
  },
  {
    icon: <Users className="h-10 w-10 text-orange-500" />,
    title: "Con người",
    description:
      "Chúng tôi cam kết xây dựng một môi trường làm việc công bằng, minh bạch, không phân biệt đối xử.",
  },
];

const StrategicVision = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Tầm nhìn chiến lược
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              HTS tiếp tục theo đuổi mục tiêu lớn dài hạn trở thành doanh nghiệp
              số và đứng trong Top 50 Công ty hàng đầu thế giới về cung cấp dịch
              vụ, giải pháp chuyển đổi số toàn diện vào năm 2030. Để đạt được
              mục tiêu này, HTS xây dựng các chương trình hành động cân bằng,
              toàn diện ở cả ba khía cạnh.
            </p>
            <Link
              href="https://HTS.com.vn/blogs/news/nghi-dinh-70-2025-nd-cp-sua-doi-mot-so-quy-dinh-lien-quan-den-hoa-don"
              className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              XEM THÊM
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {visionItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center
                  min-h-[360px]"
                >
                  <div className="mx-auto flex-shrink-0 w-20 h-20 mb-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicVision;
