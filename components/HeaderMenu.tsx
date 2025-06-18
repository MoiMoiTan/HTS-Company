"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
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
    subLinks: [
      {
        title: "Xác Thực Định Danh CCCD",
        href: "/san-pham/xac-thuc-dinh-danh-cccd",
      },
      { title: "Hợp Đồng Điện Tử", href: "/san-pham/hop-dong-dien-tu  " },
      { title: "Hóa Đơn Điện Tử", href: "/san-pham/hoa-don-dien-tu" },
      { title: "Chữ ký số", href: "/san-pham/chu-ky-so" },
    ],
  },
  { title: "Tin tức", href: "/tin-tuc" },
  { title: "Cơ Hội Nghề Nghiệp", href: "/co-hoi-nghe-nghiep" },
];

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-full items-center gap-4 text-sm font-semibold text-gray-700">
      {navLinks.map((link) => (
        <div
          key={link.title}
          className="group relative flex h-full items-center"
        >
          <Link
            href={link.href}
            className={cn(
              "flex items-center gap-1 px-3 py-2 transition-colors hover:text-orange-500",
              pathname === link.href && "text-orange-500 font-bold"
            )}
          >
            {link.title}
            {link.subLinks && (
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            )}
          </Link>
          {link.subLinks && (
            <div className="absolute top-full left-0 z-20 hidden w-56 rounded-md border bg-white py-2 shadow-lg group-hover:block">
              {link.subLinks.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenu;
