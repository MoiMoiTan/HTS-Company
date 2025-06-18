import React from "react";
import Image from "next/image"; // Component này bây giờ sẽ được sử dụng

interface BannerSectionProps {
  title: string;
  imageUrl: string; // Đây có thể là một URL chuỗi hoặc một đối tượng StaticImageData
  altText: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  title,
  imageUrl,
  altText,
}) => {
  return (
    <div className="component fpt-container">
      <div className="component-content">
        <div className="component banner with-title with-description">
          <div className="component-content">
            <div className="banner-title-desc col-sm-12 col-md-12 col-lg-7">
              <h1 className="banner-title field-title">{title}</h1>
            </div>

            {/* --- PHẦN ĐÃ SỬA LỖI --- */}
            {/* 1. Thêm `relative` và một chiều cao cố định (ví dụ: `h-[500px]`) cho container.
              2. Thay thế <img> bằng <Image>.
              3. Sử dụng prop `fill` để ảnh tự động lấp đầy container.
              4. Prop `priority` giúp Next.js ưu tiên tải hình ảnh này, cải thiện tốc độ LCP.
            */}
            <div className="banner-image relative h-[500px] w-full">
              <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* --- KẾT THÚC PHẦN SỬA LỖI --- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
