import NguyenDucTungImg from "@/images/giamdoc/Nguyen-Duc-Tung.png";
import NguyenVanSonImg from "@/images/giamdoc/Nguyen-Van-Son.png";
import NgoAnhDungImg from "@/images/giamdoc/Ngo-Anh-Dung.png";
import VuManhHaImg from "@/images/giamdoc/Vu-Manh-Ha.png";
import LeThanhDatImg from "@/images/giamdoc/Le-Thanh-Dat.png";
import BuiDinhThangImg from "@/images/giamdoc/Bui-Dinh-Thang.png";
import img2 from "@/images/banner/giai-phap.png";
import img4 from "@/images/banner/ke-hop-tac.png";
import taiLieu1 from "@/images/tailieu1.png";
import taiLieu2 from "@/images/tailieu2.png";
import taiLieu3 from "@/images/tailieu3.png";
import taiLieu4 from "@/images/tailieu4.png";
import new1 from "@/images/TinTuc1.png";
import new2 from "@/images/TinTuc2.png";
import new3 from "@/images/TicTuc3.png";
import { Lightbulb, Users, BarChart3, AlarmClock } from "lucide-react";

export const quickLinkData = [
  { title: "Về HTS", href: "/about" },
  { title: "Liên Hệ Với Chúng Tôi", href: "/contact" },
  { title: "Điều Khoản Và Điều Kiện", href: "/terms" },
  { title: "Chính Sách Bảo Mật", href: "/privacy" },
  { title: "Câu Hỏi Thường Gặp", href: "/faqs" },
];

export const categoriesData = [
  { title: "Chữ ký số", href: "/san-pham/chu-ky-so" },
  { title: "Hóa đơn điện tử", href: "/san-pham/hoa-don-dien-tu" },
  { title: "Hợp đồng điện tử", href: "/san-pham/hop-dong-dien-tu" },
  {
    title: "Xác thực định danh CCCD",
    href: "/san-pham/xac-thuc-dinh-danh-cccd",
  },
];

export const faqsData = [
  {
    question: "HTS cung cấp những dịch vụ gì?",
    answer:
      "HTS cung cấp một loạt các giải pháp công nghệ bao gồm phát triển phần mềm tùy chỉnh, dịch vụ đám mây, và tư vấn chuyển đổi số.",
  },
  {
    question: "Làm thế nào để tôi nhận được hỗ trợ cho các sản phẩm của HTS?",
    answer:
      "Bạn có thể liên hệ với đội ngũ hỗ trợ của chúng tôi thông qua trang liên hệ hoặc bằng cách gửi email đến support@hts.com.",
  },
  {
    question:
      "HTS có cung cấp chương trình đào tạo cho sản phẩm của mình không?",
    answer:
      "Có, chúng tôi cung cấp các chương trình đào tạo toàn diện cho tất cả các sản phẩm và dịch vụ của mình. Vui lòng liên hệ với đội ngũ kinh doanh của chúng tôi để biết thêm thông tin chi tiết.",
  },
  {
    question: "HTS phục vụ những ngành công nghiệp nào?",
    answer:
      "HTS phục vụ nhiều ngành công nghiệp khác nhau bao gồm tài chính, y tế, bán lẻ, và sản xuất.",
  },
  {
    question: "HTS đảm bảo an toàn dữ liệu bằng cách nào?",
    answer:
      "Chúng tôi áp dụng các biện pháp bảo mật theo tiêu chuẩn ngành và tuân thủ tất cả các quy định bảo vệ dữ liệu liên quan để đảm bảo an toàn cho dữ liệu của khách hàng.",
  },
];

export const ABOUT_LINKS = [
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

export const GIAM_DOC = [
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

export const OFFICE_LOCATIONS = [
  "Thủ đô Hà Nội",
  "Tỉnh Hải Dương",
  "Thành phố Hồ Chí Minh",
];

export const CAPABILITIES = [
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

export const SOLUTIONS = [
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

export const PRODUCTS = [
  "HILO Invoice",
  "HILO iVan",
  "HILO eContract",
  "HILO Care",
  "HILO HUD",
  "HILO CA",
];

export const headerData = [
  { title: "Trang Chủ", href: "/" },
  { title: "Về HTS", href: "/about" },
  { title: "Sản Phẩm", href: "/san-pham" },
  { title: "Tin Tức", href: "/tin-tuc" },
  { title: "Tuyển Dụng", href: "/co-hoi-nghe-nghiep" },
];

export const navLinks = [
  { title: "Trang chủ", href: "/" },
  {
    title: "Về HTS",
    href: "/about",
    subLinks: [
      {
        title: "Liên Hệ Với Chúng Tôi",
        href: "/contact",
      },
      {
        title: "Câu Hỏi Thường Gặp",
        href: "/faqs",
      },
      {
        title: "Chính Sách Bảo Mật",
        href: "/privacy",
      },
      {
        title: "Điều Khoản Và Điều Kiện",
        href: "/terms",
      },
    ],
  },
  {
    title: "Sản Phẩm",
    href: "/san-pham",
    isProduct: true,
  },
  { title: "Tin tức", href: "/tin-tuc" },
  { title: "Cơ Hội Nghề Nghiệp", href: "/co-hoi-nghe-nghiep" },
];

export const slides = [
  {
    image: img2,
    title: "HILO-CA: Giải pháp chữ ký số an toàn, nhanh chóng",
    desc: "HILO-CA mang đến giải pháp ký số tiện lợi, bảo mật, đáp ứng mọi nhu cầu giao dịch điện tử với tính pháp lý cao.",
    Link: "https://hilo.com.vn/blogs/news/nghi-dinh-70-2025-nd-cp-sua-doi-mot-so-quy-dinh-lien-quan-den-hoa-don", // Use the full URL here
  },
  {
    image: img4,
    title: "Ký kết hợp tác phát triển giải pháp số hóa",
    desc: "HILO ký kết hợp tác với nhiều doanh nghiệp lớn, thúc đẩy chuyển đổi số, quản lý hồ sơ lưu trữ hiệu quả.",
    Link: "https://hilo.com.vn/blogs/news/nghi-dinh-70-2025-nd-cp-sua-doi-mot-so-quy-dinh-lien-quan-den-hoa-don", // Use the full URL here
  },
];

export const items = [
  {
    image: taiLieu1,
    title: "Công nghệ",
    desc: "HTS là đối tác chiến lược quan trọng về tư vấn, đào tạo, triển khai chuyển đổi số của các tập đoàn, tổ chức hàng đầu trên thế giới và tại Việt Nam trong nhiều lĩnh vực.",
    link: "/he-sinh-thai-HTS/cong-nghe",
  },
  {
    image: taiLieu2,
    title: "Viễn thông",
    desc: "Chúng tôi không ngừng đầu tư, triển khai và tích hợp ngày càng nhiều các dịch vụ giá trị gia tăng trên cùng một đường truyền Internet và kiến tạo hệ sinh thái truyền thông số.",
    link: "/he-sinh-thai-HTS/vien-thong",
  },
  {
    image: taiLieu3,
    title: "Giáo dục",
    desc: "Là thương hiệu giáo dục có tầm ảnh hưởng quốc tế, Tổ chức Giáo dục HTS đã mở rộng đầy đủ các cấp học góp phần cung cấp nguồn nhân lực chất lượng cao cho thị trường.",
    link: "/he-sinh-thai-HTS/giao-duc",
  },
  {
    image: taiLieu4,
    title: "Công ty thành viên",
    desc: "Công ty thành viên với các lĩnh vực kinh doanh đặc trưng là thành tố quan trọng cấu thành hệ sinh thái HTS, khẳng định sức mạnh tổng thể của HTS.",
    link: "/he-sinh-thai-HTS/cong-ty-thanh-vien",
  },
];

export const items2 = [
  {
    image: new2,
    title:
      "Thông báo về ngày chốt danh sách cổ đông để thực hiện quyền mua cổ phần",
    date: "10/06/2025",
    link: "https://hilo.com.vn/blogs/news/thong-bao-ngay-chot-danh-sach-co-dong-de-thuc-hien-quyen-mua-co-phan",
  },
  {
    image: new1,
    title:
      "Giải Pháp Hóa Đơn Điện Tử Toàn Diện giúp Hộ Kinh Doanh, Doanh Nghiệp Tự Tin Kinh Doanh Theo Nghị Định 70/2025/NĐ-CP",
    date: "02/06/2025",
    link: "https://hilo.com.vn/blogs/news/giai-phap-hoa-don-dien-tu-toan-dien-giup-ho-kinh-doanh-doanh-nghiep-t ",
  },
  {
    image: new3,
    title:
      "Hilo công bố trúng thầu Dự Án Chứng Thư Số cho Hệ Thống Hóa Đơn Điện Tử thuộc Ngân Hàng TMCP Đầu Tư Và Phát Triển Việt Nam (BIDV)",
    date: "10/04/2025",
    link: "https://hilo.com.vn/blogs/news/hilo-cong-bo-trung-thau-du-an-chung-thu-so-cho-he-thong-hoa-don-dien-t",
  },
];

export const items1 = [
  {
    icon: Lightbulb,
    title: "Giải pháp phù hợp cho mọi tổ chức, cơ quan, doanh nghiệp",
    desc: "HTS Group có gần 10 năm hoạt động trong lĩnh vực chuyển đổi số, mang lại giải pháp hiệu quả và tối ưu quá trình vận hành. ",
  },
  {
    icon: Users,
    title: "Đơn vị truyền dẫn dữ liệu điện tử chính thức với Tổng Cục Thuế",
    desc: "Được Tổng Cục Thuế công nhận là đơn vị T-VAN. Được công bố chính thức trên Cổng thông tin của Tổng Cục Thuế.",
  },
  {
    icon: BarChart3,
    title: "Tiên phong phát triển giải pháp tích hợp đa nền tảng",
    desc: "HTS Group tư vấn, phát triển giải pháp phần mềm tích hợp trực tiếp vào hệ thống quản trị của khách hàng.",
  },
  {
    icon: AlarmClock,
    title: "Đội ngũ chuyên gia và nhân viên tận tâm, năng lực cao ",
    desc: "Đội ngũ chuyên gia và nhân viên HTS Group am hiểu trong lĩnh vực công nghệ, thuế, quy trình quản lý,...",
  },
];

