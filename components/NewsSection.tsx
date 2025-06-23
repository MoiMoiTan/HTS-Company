// components/NewsSection.tsx
import Image from "next/image";
import Link from "next/link";
import { items2 } from "@/constants/index";

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
          {items2.map((item, i) => (
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
