import Container from "@/components/Container";
import React from "react";
import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
import Image from "next/image";
import HTSLogo from "@/images/icon/logo.png";
import HoptacHTSBg from "@/images/DichVuHILO.png";
import VietnamMap from "@/images/map.png";
import HTSIconWeb from "@/images/icon/icon.png";
import AboutContent from "@/components/AboutContent";
import {
  ABOUT_LINKS,
  GIAM_DOC,
  OFFICE_LOCATIONS,
  CAPABILITIES,
  SOLUTIONS,
  PRODUCTS,
} from "@/constants/index";

const AboutPage = () => {
  return (
    <>
      <Container className="max-w-6xl lg:px-8 py-12">
        <div className="bg-white p-4 rounded-lg mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {ABOUT_LINKS.slice(0, 8).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`block text-center py-4 px-6 rounded-lg font-semibold text-xl transition-colors duration-200
                  ${
                    link.isPrimary
                      ? "bg-orange-400 text-white"
                      : "bg-white text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white"
                  }
                `}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-orange-400 text-center">
          Về Chúng Tôi
        </h1>
        <p className="mb-4 font-bold text-2xl text-center justify-center">
          Chúng tôi thấu hiểu rằng, đồng hành cùng sự phát triển của HTS là sự
          thịnh vượng của Quý Đối tác, Khách hàng. Chúng tôi luôn mong muốn được
          cung cấp các dịch vụ trọn gói tối ưu và tiện lợi cho Quý Đối tác và
          Khách hàng.
        </p>
        <p className="mb-4 font-semibold text-center justify-center">
          HTS không chỉ nghe như một lời chào, HTS còn là sứ mệnh, sứ mệnh Hỗ
          trợ và Đồng hành cùng sự phát triển của Khách hàng. Với nỗ lực không
          ngừng cố gắng vươn lên khẳng định vị thế của mình trong lĩnh vực công
          nghệ thông tin, HTS tạo ra lợi thế cho mình bằng việc cung cấp sản
          phẩm và dịch vụ tới hơn 10,000 Khách hàng. Đồng hành cùng doanh nghiệp
          phát triển 4 trụ cột chính: Human Resources, Information Technology,
          Bank Loans, Organization.
        </p>
        <div className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center justify-center text-">
              Đội ngũ chuyên gia của chúng tôi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GIAM_DOC.map((person, index) => (
              <div key={index} className="text-center">
                <TiltedCard
                  imageSrc={person.imageSrc}
                  altText={person.name}
                  containerHeight="400px"
                  containerWidth="auto"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.1}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-center">
                      <p className="font-semibold text-lg">{person.name}</p>
                      <p className="text-sm text-gray-300">{person.title}</p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="relative w-full py-24 bg-gradient-to-br from-orange-400 to-orange-200 overflow-hidden mt-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center justify-center">
            HTS Hệ sinh thái phần mềm và dịch vụ số hóa
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-16">
            Phần mềm và dịch vụ hướng đến nền kinh tế số và xã hội số. Tối ưu
            quy trình vận hành trong lĩnh vực dịch vụ công và doanh nghiệp 4.0
          </p>

          <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
            <Image
              src={HoptacHTSBg}
              alt="Hệ sinh thái HTS"
              width={400}
              height={300}
              className="object-contain z-0"
            />

            <div className="absolute top-[24px] left-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
              Tích hợp hệ thống
            </div>
            <div className="absolute top-[24px] right-[24px] p-4 bg-white rounded-lg shadow-lg text-gray-800 font-semibold z-20">
              Tuân thủ pháp lý
            </div>
            <AboutContent />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-12">
          <div className="lg:col-span-1 text-center lg:text-left">
            <Image
              src={HTSLogo}
              alt="HTS Logo"
              width={120}
              height={40}
              className="mx-auto lg:mx-0 mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800">
              Hệ thống phần mềm đáp ứng đầy đủ mọi nhu cầu
            </h2>
            <p className="mt-4 text-base text-gray-600">
              HTS Group giữ vững niềm tin và chinh phục các đối tác khó tính
              nhất như VETC, PV Oil, Halavani với giải pháp phần mềm tích hợp
              hoàn toàn với hệ thống hiện có của Khách hàng.
            </p>
          </div>

          <div className="lg:col-span-3 relative w-full bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Tiên phong xu hướng công nghệ
              </h3>
              <p className="text-xl text-orange-500 font-semibold">
                Khẳng định vị thế Việt Nam
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={VietnamMap}
                alt="Bản đồ Việt Nam"
                width={1000}
                height={500}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Image
                src={HTSIconWeb}
                alt="icon"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900">VĂN PHÒNG</h3>
            </div>
            <ul className="space-y-2">
              {OFFICE_LOCATIONS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg font-bold mr-2 mt-0 leading-none text-orange-500">
                    &#8226;
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Image
                src={HTSIconWeb}
                alt="icon"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900">NĂNG LỰC</h3>
            </div>
            <ul className="space-y-2">
              {CAPABILITIES.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg font-bold mr-2 mt-0 leading-none text-orange-500">
                    &#8226;
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Image
                src={HTSIconWeb}
                alt="icon"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900">GIẢI PHÁP</h3>
            </div>
            <ul className="space-y-2">
              {SOLUTIONS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg font-bold mr-2 mt-0 leading-none text-orange-500">
                    &#8226;
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Image
                src={HTSIconWeb}
                alt="icon"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-xl font-bold text-gray-900">SẢN PHẨM</h3>
            </div>
            <ul className="space-y-2">
              {PRODUCTS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg font-bold mr-2 mt-0 leading-none text-orange-500">
                    &#8226;
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
