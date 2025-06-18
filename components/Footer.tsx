import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { categoriesData, quickLinkData } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import logoHTS from "@/images/icon/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cột 1: Logo và Giới thiệu */}
          <div className="space-y-4">
            <Image
              src={logoHTS}
              alt="HTS Logo"
              width={300}
              height={160}
              className="mb-4"
            />
            <p className="text-gray-600 text-sm font-semibold">
              HTS Group cam kết cung cấp dịch vụ và giải pháp chuyển đổi số tối
              ưu, đáp ứng nhu cầu của từng khách hàng. Vui lòng để lại thông tin
              liên hệ, đội ngũ chuyên gia HTS Group sẽ hỗ trợ các doanh nghiệp
              trong thời gian sớm nhất!
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* Cột 2: Quick Links */}
          <div>
            <div className="flex flex-col gap-3">
              {quickLinkData?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium transition-colors"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Cột 3: Categories */}
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Sản Phẩm</h3>
            <div className="flex flex-col gap-3">
              {categoriesData?.map((item) => (
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium transition-colors"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Cột 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-darkColor mb-4">
              Gửi Thư Cho Chúng Tôi
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Đăng ký nhận bản tin của chúng tôi để nhận thông tin cập nhật và
              ưu đãi độc quyền.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Nhập Email Của Bạn"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
