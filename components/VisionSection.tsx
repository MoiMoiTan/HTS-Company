import { Lightbulb, Users, BarChart3, AlarmClock } from "lucide-react";
import Image from "next/image";
import logoHTS from "@/images/icon/logo.png";
import GlareHover from "./GlareHover"; // GlareHover is still good for interactive cards

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
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-hts-orange-soft to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <Image
            src={logoHTS}
            alt="HTS Logo"
            width={240}
            height={72}
            className="mb-8 drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          />
          <h2
            className="text-4xl md:text-5xl font-extrabold text-darkColor text-center mb-4 leading-tight tracking-tight animate-fade-in-up" // Dark text on light background
            style={{ animationDelay: "0.3s" }}
          >
            Giải pháp chuyển đổi số của HTS Group
          </h2>
          <div
            className="w-24 h-1 bg-lightOrange rounded-full mb-6 animate-fade-in-up" // Divider in brand orange
            style={{ animationDelay: "0.5s" }}
          ></div>
          <p
            className="text-darkText text-lg md:text-xl text-center max-w-3xl opacity-90 animate-fade-in-up" // Darker text for readability
            style={{ animationDelay: "0.7s" }}
          >
            Khám phá những giá trị cốt lõi và cam kết vững chắc của HTS Group
            trong hành trình kiến tạo tương lai số cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 auto-rows-fr">
          {items.map((item, i) => {
            const Icon = item.icon;
            const animationDelay = `${0.9 + i * 0.2}s`;
            // Keep the subtle vertical offset for a dynamic but still clean look
            const offsetClass =
              i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-6"; // Slightly less offset
            const largerScreenOffset =
              i === 2 ? "xl:-translate-y-3" : i === 3 ? "xl:translate-y-3" : ""; // Slightly less offset

            return (
              <GlareHover
                key={i}
                glareColor="#ffffff" // Glare color can remain white for highlight
                glareOpacity={0.3} // Slightly reduced glare opacity
                glareAngle={-30}
                glareSize={300}
                transitionDuration={400} // Faster transition for snappier feel
                playOnce={false}
                className={`
                  relative bg-white rounded-2xl shadow-lg flex flex-col items-center text-center px-8 py-10 min-h-[360px] justify-start
                  border border-gray-200 transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl group
                  animate-fade-in-up
                  ${offsetClass} ${largerScreenOffset}
                `}
                style={{ animationDelay: animationDelay }}
                width="100%"
                height="auto"
                background="transparent"
                borderColor="transparent"
              >
                {/* Subtle border glow, perhaps in a very light grey or very subtle orange */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-hts-orange-main/30 group-hover:border-hts-orange-main shadow-[0_0_32px_0_rgba(255,140,0,0.15)]"></div>

                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-lightOrange/30 mb-8 mt-2 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-hts-orange-main/20 group-hover:shadow-lg">
                  <Icon
                    size={56} // Appropriately sized icons
                    strokeWidth={2}
                    className="text-hts-orange-main transition-colors duration-300 group-hover:text-hts-orange-dark" // Brand orange for icons
                  />
                </div>
                <h4 className="text-xl font-extrabold text-darkColor mb-4 leading-snug tracking-wide group-hover:text-hts-orange-main transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-darkText text-base leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
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
