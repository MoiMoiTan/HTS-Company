import Image from "next/image";
import Link from "next/link";
import investor from "@/images/investor.png";

export default function InvestorSection() {
  return (
    <section className="py-16 bg-[linear-gradient(to_bottom,#f9fafb_80%,white_80%)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src={investor}
            alt="Nhà đầu tư"
            width={500}
            height={350}
            className="rounded-xl shadow"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Nhà đầu tư</h2>
          <p className="mb-6 text-gray-600">
            Cập nhật thông tin tài chính toàn diện và các báo cáo mới nhất để
            cùng HTS tăng trưởng bền vững.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/nha-dau-tu/dai-hoi-co-dong"
              className="text-orange-500 font-semibold hover:underline"
            >
              Đại hội đồng cổ đông
            </Link>
            <Link
              href="/nha-dau-tu/bao-cao-thuong-nien?tab=1&index=2"
              className="text-orange-500 font-semibold hover:underline"
            >
              Báo cáo tài chính
            </Link>
            <Link
              href="/nha-dau-tu/bao-cao-thuong-nien"
              className="text-orange-500 font-semibold hover:underline"
            >
              Báo cáo thường niên
            </Link>
            <Link
              href="/nha-dau-tu/bao-cao-thuong-nien?tab=1&index=3"
              className="text-orange-500 font-semibold hover:underline"
            >
              Kết quả kinh doanh
            </Link>
          </div>
          <Link
            href="/nha-dau-tu"
            className="text-orange-500 font-semibold hover:underline"
          >
            XEM THÊM
          </Link>
        </div>
      </div>
    </section>
  );
}
