// components/NewsSection.tsx
import Image from "next/image";
import Link from "next/link";
import new1 from "@/images/TinTuc1.png";
import new2 from "@/images/TinTuc2.png";
import new3 from "@/images/TicTuc3.png";

const items = [
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

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400">
            Tin tức nổi bật
          </h2>
          <Link
            href="https://hilo.com.vn/blogs/news"
            className="text-orange-500 font-semibold hover:underline"
          >
            Xem thêm
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 flex flex-col h-full"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <Link
                href={item.link}
                className="font-bold text-lg mb-2 hover:text-orange-500"
              >
                {item.title}
              </Link>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
