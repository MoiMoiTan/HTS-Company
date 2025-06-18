import Container from "@/components/Container";
import React from "react";
import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
import Image from "next/image";
import HTSLogo from "@/images/icon/logo.png";
import HoptacHTSBg from "@/images/DichVuHILO.png";
import NguyenDucTungImg from "@/images/giamdoc/Nguyen-Duc-Tung.png";
import NguyenVanSonImg from "@/images/giamdoc/Nguyen-Van-Son.png";
import NgoAnhDungImg from "@/images/giamdoc/Ngo-Anh-Dung.png";
import VuManhHaImg from "@/images/giamdoc/Vu-Manh-Ha.png";
import LeThanhDatImg from "@/images/giamdoc/Le-Thanh-Dat.png";
import BuiDinhThangImg from "@/images/giamdoc/Bui-Dinh-Thang.png";
import AboutContent from "@/components/AboutContent";
import VietnamMap from "@/images/map.png";
import HTSIconWeb from "@/images/icon/icon.png";

const links = [
  { text: "Về Chúng Tôi", href: "/about", isPrimary: true },
  { text: "HILO Shop", href: "https://Hiloshop.vn/" },
  {
    text: "Doanh Nghiệp 4.0",
    href: "https://HILO.com.vn/pages/dich-vu-doanh-nghiep-4-0",
  },
  { text: "HILO Invoice", href: "https://Hiloinvoice.vn/" },
  { text: "HILO CA", href: "https://HILO-ca.vn/" },
  { text: "Liên Hệ", href: "/contact" },
];

const giamdoc = [
  {
    imageSrc: NguyenDucTungImg,
    name: "Ông Nguyễn Đức Tùng",
    title: "Chủ tịch Hội Đồng Quản Trị",
  },
  {
    imageSrc: NguyenVanSonImg,
    name: "Ông Nguyễn Văn Sơn",
    title: "Phó Tổng Giám Đốc",
  },
  {
    imageSrc: NgoAnhDungImg,
    name: "Ngô Anh Dũng",
    title: "Giám Đốc Khối Kinh Doanh Tổng Hợp",
  },
  {
    imageSrc: VuManhHaImg,
    name: "Ông Vũ Mạnh Hà",
    title: "Giám Đốc Chi nhánh Hải Dương",
  },
  {
    imageSrc: LeThanhDatImg,
    name: "Ông Lê Thành Đạt",
    title: "Phó Giám Đốc Chi nhánh Hồ Chí Minh, Phó Tổng Giám Đốc",
  },
  {
    imageSrc: BuiDinhThangImg,
    name: "Ông Bùi Đình Thắng",
    title: "Giám Đốc Khối Sản Xuất và Kinh Doanh Dịch Vụ Chữ Ký Số",
  },
];

const AboutPage = () => {
  const officeLocations = [
    "Thủ đô Hà Nội",
    "Tỉnh Hải Dương",
    "Thành phố Hồ Chí Minh",
  ];

  const capabilities = [
    "10+ Sản phẩm",
    "30.000 Khách hàng",
    "100+ Nhân sự",
    "10 Năm kinh nghiệm",
    "Tổ chức T-VAN",
    "Thành viên Hiệp Hội An Toàn Thông Tin",
    "Tiêu chuẩn ISO 27001:2013",
    "Tiêu chuẩn ISO 9001:2015",
    "Nền Tảng Quản Trị Doanh Nghiệp Toàn Diện",
  ];

  const solutions = [
    "Số Hóa Và Lưu Trữ Hồ Sơ Số",
    "Hóa Đơn Điện Tử",
    "Chữ Ký Số",
    "Hợp Đồng Điện Tử",
    "Lưu Trữ Và Xử Lý Dữ Liệu",
    "Hạ Tầng Trung Tâm Dữ liệu",
    "Ảo Hóa Và Tích Hợp Cloud",
    "Hạ Tầng Mạng",
    "Giao Thông Thông Minh",
    "Hệ thống hoạch định nguồn lực",
    "Hệ thống điều hành văn bản",
    "Văn phòng điều hành điện tử",
    "Quản lý và chăm sóc khách hàng",
    "Quản lý thông tin nhân sự",
    "Hệ thống định danh điện tử",
  ];

  const products = [
    "HILO Invoice",
    "HILO iVan",
    "HILO eContract",
    "HILO Care",
    "HILO HUD",
    "HILO CA",
  ];

  return (
    <>
      <Container className="max-w-6xl lg:px-8 py-12">
        <div className="bg-white p-4 rounded-lg mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {links.slice(0, 8).map((link, index) => (
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
            {giamdoc.map((person, index) => (
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
            {/* Background image for connections */}
            <Image
              src={HoptacHTSBg}
              alt="Hệ sinh thái HTS"
              width={400}
              height={300}
              className="object-contain z-0"
            />

            {/* Corner Text Boxes */}
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
              {officeLocations.map((item, index) => (
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
              {capabilities.map((item, index) => (
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
              {solutions.map((item, index) => (
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
              {products.map((item, index) => (
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
