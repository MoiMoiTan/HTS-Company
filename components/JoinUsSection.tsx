import Image from "next/image";
import Link from "next/link";
import bannerTopBrand from "@/images/banner/top brand.png";

export default function JoinUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">
            Tham gia cùng chúng tôi
          </h2>
          <span className="block text-lg text-gray-600 mb-4 font-semibold">
            Cùng đồng hành kiến tạo tương lai.
          </span>
          <p className="mb-6 text-gray-600">
            Dù là sinh viên mới ra trường hay ứng viên đã có kinh nghiệm, chúng
            tôi luôn sẵn sàng tạo điều kiện để bạn phát triển tài năng toàn diện
            nhất. Hãy tìm hiểu thêm về các ngành nghề và cơ hội việc làm tại
            HTS.
          </p>
          <Link
            href="/co-hoi-nghe-nghiep"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Xem thêm
          </Link>
        </div>
        <div className="flex-1 flex gap-4">
          <Image
            src={bannerTopBrand}
            alt="Join us"
            width={800}
            height={600}
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
