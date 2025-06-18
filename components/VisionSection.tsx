import { Lightbulb, Users, BarChart3, AlarmClock } from "lucide-react";
import Image from "next/image";
import logoHTS from "@/images/icon/logo.png";
import GlareHover from "./GlareHover";

const items = [
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

export default function VisionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-400 to-orange-200">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Image
            src={logoHTS}
            alt="HTS Logo"
            width={200}
            height={60}
            className="mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Giải pháp chuyển đổi số của HTS Group
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlareHover
                key={i}
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="relative bg-white/90 rounded-2xl shadow flex flex-col items-center text-center px-6 py-10 min-h-[340px] justify-start border border-orange-100"
                width="100%"
                height="auto"
                background="transparent"
                borderColor="transparent"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-orange-100 mb-6 mt-2">
                  <Icon
                    size={48}
                    strokeWidth={2.2}
                    className="text-orange-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-orange-700 mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-xl leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </GlareHover>
            );
          })}
        </div>
      </div>
    </section>
  );
}
