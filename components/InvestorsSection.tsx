"use client";
import Image from "next/image";
import Link from "next/link";

export default function InvestorsSection() {
  return (
    <div className="component two-cols-text-with-image investors-home-wrapper">
      <div className="component-content">
        <div className="investors-home-content-wrapper">
          <div className="container-grid-10">
            <div className="investors-home">
              <div className="investors-home-left-content">
                <Image
                  src="/images/investors.webp"
                  alt="Nhà đầu tư"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="investors-home-right-content">
                <h2 className="title text-2xl md:text-3xl font-bold mb-4">
                  Nhà đầu tư
                </h2>
                <div className="description mb-6 text-gray-600">
                  Cập nhật thông tin tài chính toàn diện và các báo cáo mới nhất
                  để cùng HTS tăng trưởng bền vững.
                </div>
                <div className="link-content-wrapper">
                  <div className="content-link hide-on-mobile">
                    <Link
                      href="/nha-dau-tu/dai-hoi-co-dong"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Đại hội đồng cổ đông
                    </Link>
                    <Link
                      href="/nha-dau-tu/bao-cao-tai-chinh"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Báo cáo tài chính
                    </Link>
                  </div>
                  <div className="content-link hide-on-mobile">
                    <Link
                      href="/nha-dau-tu/bao-cao-thuong-nien"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Báo cáo thường niên
                    </Link>
                    <Link
                      href="/nha-dau-tu/ket-qua-kinh-doanh"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Kết quả kinh doanh
                    </Link>
                  </div>
                  <div className="content-link hide-on-desktop">
                    <Link
                      href="/nha-dau-tu/dai-hoi-co-dong"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Đại hội đồng cổ đông
                    </Link>
                    <Link
                      href="/nha-dau-tu/bao-cao-thuong-nien"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Báo cáo thường niên
                    </Link>
                    <Link
                      href="/nha-dau-tu/bao-cao-tai-chinh"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Báo cáo tài chính
                    </Link>
                    <Link
                      href="/nha-dau-tu/ket-qua-kinh-doanh"
                      className="item-link block mb-2 text-orange-500 hover:underline"
                    >
                      Kết quả kinh doanh
                    </Link>
                  </div>
                </div>
                <Link
                  href="/nha-dau-tu"
                  className="see-more-text text-orange-500 font-semibold hover:underline inline-block mt-4"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
