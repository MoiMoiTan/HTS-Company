"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

// Giả sử bạn có một icon chung cho các popup.
// Hãy thay đổi đường dẫn này cho đúng với file icon của bạn.
import PopupIcon from "@/images/icon/icon.png";

// --- DỮ LIỆU CHO POPUP ---
interface ColContent {
  title: string;
  subtitle?: string;
  description?: string;
  list?: string[];
}

interface PopupDataItem {
  title: string;
  icon: StaticImageData;
  col1: ColContent;
  col2: ColContent;
  col3?: ColContent;
}

interface PopupData {
  chinhPhuDienTu: PopupDataItem;
  doanhNghiep40: PopupDataItem;
}

const popupData: PopupData = {
  chinhPhuDienTu: {
    title: "Chuyển đổi số Cơ Quan, Tổ Chức",
    icon: PopupIcon,
    col1: {
      title: "HTS là đơn vị T-VAN được Tổng Cục Thuế chứng nhận",
      subtitle: "Giải pháp đạt chuẩn kiến trúc Chính phủ điện tử",
      description: `Từ điểm mốc năm 2018 HTS chính thức được Tổng Cục Thuế công nhận là tổ chức T-VAN. Dựa vào kinh nghiệm làm việc và triển khai công tác số hóa tại những cơ quan Chính Phủ. HTS tiếp tục cung cấp bộ sản phẩm dịch vụ \"Chính Phủ Điện Tử\". Chúng tôi xây dựng hệ thống phần mềm tổng thể phục vụ công tác quản lý Nhà nước, đạt chuẩn khung kiến trúc Chính phủ điện tử`,
    },
    col2: {
      title: "Hệ thống giải pháp phần mềm số hóa dịch vụ hành chính công",
      subtitle: "5 hệ thống phần mềm tối ưu hóa quy trình dịch vụ công",
      list: [
        "Phần Mềm Số Hóa Và Quản Lý Hồ Sơ Lưu Trữ Điện Tử Sau Số Hóa",
        "Phần Mềm Một Cửa Điện Tử Và Một Cửa Điện Tử Liên Thông",
        "Phần Mềm Quản Lý Tiếp Dân, Giải Quyết Đơn Thư Khiếu Nại, Tố Cáo",
        "Phần Mềm Đánh Giá Chấm Điểm Chỉ số Cải Cách Hành Chính – Par Index",
        "Phần Mềm Quản Lý Dữ Liệu, Thi Đua – Khen Thưởng",
      ],
    },
  },
  doanhNghiep40: {
    title: "Hệ sinh thái chuyển đổi số doanh nghiệp",
    icon: PopupIcon,
    col1: {
      title: "Giải pháp số hóa tiên tiến",
      subtitle: "Ứng dụng các công nghệ mới nhất",
      list: [
        "Với 10 năm triển khai nền tảng số hóa, HTS tự hào mang đến các giải pháp tiên tiến, đáp ứng mọi nhu cầu của doanh nghiệp trong hành trình số hóa.",
        "Đội ngũ hơn 100 nhân sự tại 3 chi nhánh. Đáp ứng nhanh chóng các yêu cầu hỗ trợ từ khách hàng 24/7.",
        "Chúng tôi đã cung cấp bộ sản phẩm và dịch vụ chuyển đổi số toàn diện đến hơn 30.000 khách hàng.",
      ],
    },
    col2: {
      title: "Sản phẩm chính của công ty",
      subtitle: "Hơn 30.000 khách hàng tin tưởng sử dụng",
      list: [
        "Giải Pháp Hóa Đơn Điện Tử",
        "Nền Tảng Ký Hợp Đồng Số.",
        "Nâng Tầm Sức Khỏe Doanh Nghiệp.",
        "Giải Pháp Số Hóa Và Lưu Trữ Hồ Sơ Số.",
        "Dịch Vụ Chứng Thực Chữ Ký Số Công Cộng.",
      ],
    },
    col3: {
      title: "Đồng hành cùng phát triển",
      subtitle:
        "HTS luôn quan tâm phát triển hệ thống nhân sự, mạng lưới đại lý và đầu tư hiệu quả",
      list: [
        "Chúng tôi luôn chào đón các ứng viên có hoài bão, mong muốn làm việc trong môi trường năng động và sáng tạo",
        "HTS mang đến cơ hội gia tăng thu nhập không giới hạn cho các Đối tác phát triển kinh doanh. Sẵn sàng là đối tác tin cậy, tận tâm, nhiệt tình, chu đáo",
        "Mô hình kinh doanh bền vững giúp mang lại lợi suất đầu tư hiệu quả cao.",
      ],
    },
  },
};

// --- COMPONENT POPUP ĐÃ ĐƯỢC THIẾT KẾ LẠI ---
// Bạn có thể tách component này ra file riêng (ví dụ: "@/components/InfoPopup.tsx") nếu muốn
interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: PopupDataItem | null;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const isThreeColumns = data.col3 !== undefined; // Kiểm tra nếu có cột thứ 3

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-2xl max-w-4xl w-full mx-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl z-10"
          aria-label="Đóng"
        >
          &times;
        </button>

        <div className="text-center mb-8">
          <Image
            src={data.icon}
            alt="icon"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {data.title}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 ${isThreeColumns ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8`}
        >
          {/* Cột 1 */}
          <div className="border-l-4 border-orange-400 pl-6 py-2">
            <h3 className="text-xl font-bold text-gray-900">
              {data.col1.title}
            </h3>
            {data.col1.subtitle && (
              <p className="text-orange-500 font-semibold mt-1 mb-3">
                {data.col1.subtitle}
              </p>
            )}
            {data.col1.description && (
              <p className="text-gray-600 leading-relaxed">
                {data.col1.description}
              </p>
            )}
            {data.col1.list && (
              <ul className="space-y-2">
                {data.col1.list.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 text-xl font-bold mr-3 mt-0 leading-none">
                      &#8226;
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cột 2 */}
          <div className="border-l-4 border-orange-400 pl-6 py-2">
            <h3 className="text-xl font-bold text-gray-900">
              {data.col2.title}
            </h3>
            {data.col2.subtitle && (
              <p className="text-orange-500 font-semibold mt-1 mb-3">
                {data.col2.subtitle}
              </p>
            )}
            {data.col2.description && (
              <p className="text-gray-600 leading-relaxed">
                {data.col2.description}
              </p>
            )}
            {data.col2.list && (
              <ul className="space-y-2">
                {data.col2.list.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 text-xl font-bold mr-3 mt-0 leading-none">
                      &#8226;
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cột 3 (Chỉ hiển thị nếu có) */}
          {isThreeColumns && data.col3 && (
            <div className="border-l-4 border-orange-400 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900">
                {data.col3.title}
              </h3>
              {data.col3.subtitle && (
                <p className="text-orange-500 font-semibold mt-1 mb-3">
                  {data.col3.subtitle}
                </p>
              )}
              {data.col3.description && (
                <p className="text-gray-600 leading-relaxed">
                  {data.col3.description}
                </p>
              )}
              {data.col3.list && (
                <ul className="space-y-2">
                  {data.col3.list.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 text-xl font-bold mr-3 mt-0 leading-none">
                        &#8226;
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const AboutContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<PopupDataItem | null>(null);

  const handleOpenPopup = (dataKey: keyof PopupData) => {
    setPopupContent(popupData[dataKey]);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Các khối thông tin ở góc */}
      <div className="absolute top-[24px] left-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
        Tích hợp hệ thống
      </div>
      <div className="absolute top-[24px] right-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
        Tuân thủ pháp lý
      </div>
      <div className="absolute bottom-[24px] left-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
        Chính phủ điện tử
        <button
          onClick={() => handleOpenPopup("chinhPhuDienTu")}
          className="block text-orange-500 text-sm mt-1 hover:underline"
        >
          Xem chi tiết &gt;
        </button>
      </div>
      <div className="absolute bottom-[24px] right-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
        Doanh nghiệp 4.0
        <button
          onClick={() => handleOpenPopup("doanhNghiep40")}
          className="block text-orange-500 text-sm mt-1 hover:underline"
        >
          Xem chi tiết &gt;
        </button>
      </div>
      <InfoPopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        data={popupContent}
      />
    </>
  );
};

export default AboutContent;
