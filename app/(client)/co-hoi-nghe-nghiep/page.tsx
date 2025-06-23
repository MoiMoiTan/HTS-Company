"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import banner from "@/images/jobs/banner.png";
import moiTruongLamViecImage from "@/images/jobs/moi-truong-lam-viec.png";
import {
  Users,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Award,
  Briefcase,
  HeartHandshake,
  GraduationCap,
  Rocket,
  Send,
  FileSearch,
  PenSquare,
  Handshake,
} from "lucide-react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

const RecruitmentPage = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  useEffect(() => {
    setActiveTab("chinh-sach-lao-dong");
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  if (!activeTab) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Đang tải trang...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full overflow-hidden py-12 min-h-[50vh] flex items-center justify-center text-center">
        <Image
          src={banner}
          alt="Cơ Hội Việc Làm HTS"
          fill
          className="object-cover object-center z-0 brightness-50"
          priority
        />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Gia nhập đội ngũ HTS
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Cùng chúng tôi kiến tạo những sản phẩm công nghệ tương lai và phát
            triển sự nghiệp của bạn.
          </p>
        </div>
      </div>

      <Container className="py-12 md:py-16">
        <div className="flex justify-center border-b border-gray-200 mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center -mb-px">
            <button
              onClick={() => handleTabClick("chinh-sach-lao-dong")}
              className={cn(
                "px-4 py-3 text-sm md:text-base whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none",
                activeTab === "chinh-sach-lao-dong" &&
                  "font-bold border-b-2 border-orange-500 text-orange-600"
              )}
            >
              Chính sách & Môi trường
            </button>
            <button
              onClick={() => handleTabClick("quy-trinh-tuyen-dung")}
              className={cn(
                "px-4 py-3 text-sm md:text-base whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none",
                activeTab === "quy-trinh-tuyen-dung" &&
                  "font-bold border-b-2 border-orange-500 text-orange-600"
              )}
            >
              Quy trình tuyển dụng
            </button>
            <button
              onClick={() => handleTabClick("tuyen-dung")}
              className={cn(
                "px-4 py-3 text-sm md:text-base whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none",
                activeTab === "tuyen-dung" &&
                  "font-bold border-b-2 border-orange-500 text-orange-600"
              )}
            >
              Vị trí đang tuyển
            </button>
          </div>
        </div>
        <div>
          {activeTab === "chinh-sach-lao-dong" && (
            <section id="chinh-sach-lao-dong">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                  Chính sách phát triển nhân viên
                </h2>
                <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                  Chúng tôi tin rằng con người là tài sản quý giá nhất. HTS cam
                  kết đầu tư vào các chương trình đào tạo để mỗi cá nhân đều có
                  cơ hội phát triển tối đa tiềm năng.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Đào tạo tân binh</h4>
                    <p className="text-gray-600 text-sm">
                      100% nhân viên mới được tham gia khóa đào tạo định hướng
                      để làm quen công việc và văn hóa HTS.
                    </p>
                  </div>
                  {/* Card item */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Cpu className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Đào tạo công nghệ
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Cập nhật xu hướng, thi chứng chỉ quốc tế để nâng cao trình
                      độ và khả năng sáng tạo.
                    </p>
                  </div>
                  {/* Card item */}
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Briefcase className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Bồi dưỡng kỹ năng
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Đào tạo định kỳ hàng năm để nâng cao kiến thức chuyên môn,
                      nghiệp vụ đáp ứng nhu cầu công việc.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Award className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Lực lượng kế cận</h4>
                    <p className="text-gray-600 text-sm">
                      Ưu tiên nguồn lực đào tạo cán bộ nòng cốt trở thành quản
                      lý, lãnh đạo, phục vụ phát triển dài hạn.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Lightbulb className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Phát triển bản thân
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Khuyến khích nhân viên tự học tập trau dồi kiến thức, kỹ
                      năng qua các nền tảng học tập trực tuyến.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Rocket className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">72h Trải nghiệm</h4>
                    <p className="text-gray-600 text-sm">
                      Chương trình gắn kết đồng đội, giúp nhân viên thấu hiểu
                      văn hóa và giá trị cốt lõi của công ty.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                  Môi trường & Đãi ngộ
                </h2>
                <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                  Với phương châm &quot;đầy đủ về vật chất và phong phú về tinh
                  thần&quot;, HTS xây dựng môi trường làm việc lý tưởng.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={moiTruongLamViecImage}
                      alt="Môi trường làm việc HTS"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <HeartHandshake className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Lương & Thưởng</h4>
                        <p className="text-gray-600">
                          Thu nhập cạnh tranh, lương tháng 13, thưởng lễ tết và
                          hiệu quả công việc, dự án.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          Phúc lợi toàn diện
                        </h4>
                        <p className="text-gray-600">
                          Bảo hiểm đầy đủ, chăm sóc sức khỏe, hỗ trợ các hoạt
                          động thể thao và câu lạc bộ.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          Phát triển không ngừng
                        </h4>
                        <p className="text-gray-600">
                          Cơ hội tham gia các khóa đào tạo chuyên sâu và phát
                          triển sự nghiệp bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeTab === "quy-trinh-tuyen-dung" && (
            <section id="quy-trinh-tuyen-dung">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Quy trình tuyển dụng tại HTS
              </h2>
              <div className="relative max-w-2xl mx-auto">
                <div
                  className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></div>
                <div className="relative space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
                      <Send className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Bước 1: Ứng tuyển
                      </h4>
                      <p className="text-gray-600">
                        Tìm hiểu các vị trí và nộp hồ sơ (CV) qua website tuyển
                        dụng hoặc các kênh đăng tuyển chính thức của chúng tôi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
                      <FileSearch className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Bước 2: Sàng lọc hồ sơ
                      </h4>
                      <p className="text-gray-600">
                        Bộ phận Tuyển dụng sẽ xem xét và đánh giá mức độ phù
                        hợp. Ứng viên đạt yêu cầu sẽ được liên hệ mời phỏng vấn.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Bước 3: Phỏng vấn
                      </h4>
                      <p className="text-gray-600">
                        Tham gia phỏng vấn với Nhân sự và Trưởng bộ phận chuyên
                        môn để trao đổi về kinh nghiệm và kỹ năng.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
                      <PenSquare className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Bước 4: Nhận thư mời làm việc
                      </h4>
                      <p className="text-gray-600">
                        Ứng viên thành công sẽ nhận Thư mời làm việc với các
                        thông tin chi tiết về vị trí và đãi ngộ.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10">
                      <Handshake className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">
                        Bước 5: Hội nhập
                      </h4>
                      <p className="text-gray-600">
                        Hoàn thiện hồ sơ và chính thức trở thành một thành viên
                        của đại gia đình HTS. Chào mừng bạn!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeTab === "tuyen-dung" && (
            <section id="tuyen-dung">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                Vị trí đang tuyển dụng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-50/50 rounded-lg border border-gray-200 p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Kinh doanh dự án
                  </h3>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-orange-600 mb-2">
                      Mô tả công việc
                    </h4>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                      <li>Tìm kiếm và phát triển các dự án công nghệ mới</li>
                      <li>
                        Xây dựng và duy trì mối quan hệ với khách hàng tiềm năng
                      </li>
                      <li>
                        Phân tích nhu cầu khách hàng và đề xuất giải pháp phù
                        hợp
                      </li>
                      <li>Phối hợp với các phòng ban để triển khai dự án</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-orange-600 mb-2">
                      Yêu cầu
                    </h4>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                      <li>
                        Tốt nghiệp đại học chuyên ngành CNTT, Kinh tế hoặc liên
                        quan
                      </li>
                      <li>
                        Kinh nghiệm 2-3 năm trong lĩnh vực kinh doanh dự án công
                        nghệ
                      </li>
                      <li>Kỹ năng giao tiếp và thuyết trình tốt</li>
                    </ul>
                  </div>
                  <button className="mt-4 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    Ứng tuyển ngay
                  </button>
                </div>

                <div className="bg-gray-50/50 rounded-lg border border-gray-200 p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Kinh doanh SME
                  </h3>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-orange-600 mb-2">
                      Mô tả công việc
                    </h4>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                      <li>
                        Phát triển thị trường khách hàng doanh nghiệp vừa và nhỏ
                      </li>
                      <li>
                        Tư vấn và giới thiệu các giải pháp công nghệ phù hợp
                      </li>
                      <li>
                        Xây dựng kế hoạch kinh doanh và chiến lược phát triển
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-orange-600 mb-2">
                      Yêu cầu
                    </h4>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                      <li>Kinh nghiệm 1-2 năm trong lĩnh vực kinh doanh B2B</li>
                      <li>Hiểu biết về công nghệ và xu hướng thị trường</li>
                      <li>Kỹ năng đàm phán và thuyết phục tốt</li>
                    </ul>
                  </div>
                  <button className="mt-4 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                    Ứng tuyển ngay
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </Container>
    </div>
  );
};

export default RecruitmentPage;
