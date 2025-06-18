"use client";
import Image from "next/image";
import Link from "next/link";
import teamHTS from "@/images/team-work.png";

export default function SustainableSection() {
  return (
    <section className="py-16 bg-[linear-gradient(to_bottom,#FFF9F1_80%,#f9fafb_80%)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-4">
            Phát triển bền vững
          </h2>
          <p className="font-semibold mb-6 text-gray-600">
            HTS Group cam kết cung cấp dịch vụ và giải pháp chuyển đổi số tối
            ưu, đáp ứng nhu cầu của từng khách hàng. Vui lòng để lại thông tin
            liên hệ, đội ngũ chuyên gia HTS Group sẽ hỗ trợ các doanh nghiệp
            trong thời gian sớm nhất!
          </p>
          <Link
            href="/ve-HTS/trach-nhiem-xa-hoi"
            className="text-orange-500 font-semibold hover:underline inline-block"
          >
            XEM THÊM
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src={teamHTS}
            alt="Phát triển bền vững"
            width={600}
            height={400}
            className="rounded-xl shadow object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
