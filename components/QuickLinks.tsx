"use client";
import Link from "next/link";

const QuickLinks = () => {
  const links = [
    {
      title: "Giới thiệu",
      href: "/about/introduce",
    },
    {
      title: "Tầm nhìn & Sứ mệnh",
      href: "/about/vision",
    },
    {
      title: "Lịch sử phát triển",
      href: "/about/development-history",
    },
    {
      title: "Trách nhiệm xã hội",
      href: "/about/social-responsibility",
    },
  ];

  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
